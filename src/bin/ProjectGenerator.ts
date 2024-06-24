import { Node } from '@openhps/core';
import * as chalk from 'chalk';
import * as fs from 'fs-extra';
import * as path from 'path';
import { IriString, RDFBuilder, RDFSerializer } from '../rdf';
import { dcterms, poso, rdf, rdfs } from '../vocab';
import * as jsdoc from 'jsdoc3-parser';

/**
 * Project generator
 */
export class ProjectGenerator {
    private static _modules: Set<string> = new Set();
    private static _packages: Set<string> = new Set();

    static findAllModules(dir: string): NodeModule[] {
        const packageFile = path.join(dir, 'package.json');
        if (fs.existsSync(packageFile)) {
            const packageJson = JSON.parse(fs.readFileSync(packageFile, { encoding: 'utf-8' }));
            const dependencies = packageJson.dependencies;
            const devDependencies = packageJson.devDependencies;
            
            // Combine dependencies and devDependencies
            const allDependencies = {...dependencies, ...devDependencies};
            
            // Get the names of all modules
            const allModuleNames = Object.keys(allDependencies);
            const allModules = allModuleNames.map(name => {
                try {
                    require(name);
                    return require.cache[require.resolve(name)];
                } catch (error) {
                    return null;
                }
            }).filter(Boolean) as NodeModule[];
            return allModules;
        }
    }

    static findModule(dir: string): string {
        const packageFile = path.join(dir, 'package.json');
        if (fs.existsSync(packageFile)) {
            const packageJson = JSON.parse(fs.readFileSync(packageFile, { encoding: 'utf-8' }));
            return packageJson.name;
        } else {
            const completeDir = dir.split(path.sep);
            completeDir.pop();
            return this.findModule(completeDir.join(path.sep));
        }
    }

    static loadClasses(classes: any[], module?: NodeModule) {
        if (module === undefined) {
            // Use cache instead
            [require.main]
                .concat(Object.values(require.cache))
                .concat(this.findAllModules("./"))
                .forEach((m) => this.loadClasses(classes, m));
            return;
        }
        if (!this._modules.has(module.id)) {
            this._modules.add(module.id);
            Object.keys(module.exports).forEach((key) => {
                const childModule = module.exports[key];
                if (childModule && childModule.prototype && childModule.prototype instanceof Node) {
                    childModule.prototype._module = this.findModule(path.dirname(require.resolve(module.id)));
                    childModule.prototype._file = key;
                    childModule.prototype._filePath = require.resolve(module.id);
                    classes.push(childModule);
                    this._packages.add(childModule.prototype._module);
                }
            });
        }
        module.children.forEach((module) => {
            if (!this._modules.has(module.id)) {
                this.loadClasses(classes, module);
            }
        });
    }

    static getPackages(): string[] {
        if (this._packages.size === 0) {
            this.loadNodes();
        }
        return Array.from(this._packages.values());
    }

    static loadNodes(): Array<typeof Node> {
        const nodes: Array<typeof Node> = [];
        this.loadClasses(nodes);
        return nodes;
    }

    static generateProcedures(options: ProjectBuildOptions): Promise<Map<string, [string, string, string]>> {
        return new Promise((resolve) => {
            const nodes = this.loadNodes();

            const promises = nodes.map((nodeType: any) => {
                if (options.logLevel > 2) {
                    console.log(
                        chalk.italic(
                            `Generating ${nodeType.name}`,
                            nodeType.prototype._module
                                ? `of module ${nodeType.prototype._module}`
                                : '',
                        ),
                    );
                }
                
                return this.processClass(nodeType).then((value) => {
                    if (value === undefined) {
                        return undefined;
                    }
                    return [nodeType.name, [nodeType.prototype._module, value[0], value[1]]];
                });
            });

            Promise.all(promises).then((results: Array<[string, [string, string, string]]>) => {
                const classes = new Map(results.filter((value) => value !== undefined));
                resolve(classes);
            });
        });
    }

    static processClass(nodeType: any): Promise<[string, string]> {
        return new Promise((resolve, reject) => {
            const url = `https://openhps.org/terms/procedure/${nodeType.name}`;
            const builder = RDFBuilder.namedNode(url as IriString)
                .add(rdfs.label, nodeType.name, "en");
            jsdoc(nodeType.prototype._filePath, (err, data) => {
                if (err) {
                    resolve(undefined);
                    return;
                }

                builder.add(dcterms.source, nodeType.prototype._module);

                const classAST = data.find((ast) => ast.kind === 'class');
                if (classAST) {
                    const description = classAST.classdesc;
                    builder.add(rdfs.comment, description, "en");
                    const tags = classAST.tags;
                    if (tags) {
                        const rdfTag = tags.find((tag) => tag.title === 'rdf');
                        if (rdfTag) {
                            const linkMatch = rdfTag.value.match(/\{@link\s(.*?)\}/);
                            const link = linkMatch ? linkMatch[1] : null;
                            if (link) {
                                builder.add(rdf.type, link);
                            } else {
                                builder.add(rdf.type, poso.PositioningTechnique);
                            }
                        } else {
                            builder.add(rdf.type, poso.PositioningTechnique);
                        }
                    } else {
                        builder.add(rdf.type, poso.PositioningTechnique);
                    }
                }

                RDFSerializer.stringify(builder.build()).then((turtle) => {
                    resolve([url, turtle]);
                }).catch(reject);
            });
        });
    }

    static buildProject(directory: string, options: ProjectBuildOptions = {}): Promise<number> {
        return new Promise((resolve, reject) => {
            // Prepare directories
            if (fs.existsSync(directory)) {
                fs.rmSync(directory, { recursive: true });
            }
            fs.mkdirSync(directory, { recursive: true });

            // Get all class sources
            const mapper = {};
            ProjectGenerator.generateProcedures(options)
                .then((classes) => {
                    classes.forEach((value, key) => {
                        const packageDir = path.join(directory);
                        if (!fs.existsSync(packageDir)) {
                            fs.mkdirsSync(packageDir);
                        }
                        if (value[1]) {
                            const file = path.join(packageDir, key + '.ttl');
                            if (!mapper[value[0]]) {
                                mapper[value[0]] = {};
                            }

                            mapper[value[0]][key] = value[1];

                            fs.writeFileSync(file, value[2], {
                                encoding: 'utf-8',
                            });
                        }
                    });
                    fs.writeFileSync(path.join(directory, 'index.json'), JSON.stringify(mapper, null, 2), {
                        encoding: 'utf-8',
                    });
                    resolve(classes.size);
                })
                .catch(reject);
        });
    }
}

export interface ProjectBuildOptions {
    logLevel?: number;
}

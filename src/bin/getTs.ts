/**
 * @author Vincent Tunri
 * @see {@link https://gitlab.com/vincenttunru/rdf-namespaces}
 */

import { NamedNode, Store } from 'n3';

function getComment(node: NamedNode, store: Store): string {
    const rdfComments = store.getObjects(node, 'http://www.w3.org/2000/01/rdf-schema#comment', null);
    const skosDefinitions = store.getObjects(node, 'http://www.w3.org/2004/02/skos/core#definition', null);
    const dctermsDescription = store.getObjects(node, 'http://purl.org/dc/terms/description', null);
    const comment = rdfComments.length > 0 ? rdfComments[0].value : skosDefinitions.length > 0 ? skosDefinitions[0].value : dctermsDescription.length > 0 ? dctermsDescription[0].value : undefined;
    return comment;
}

function getLabel(node: NamedNode, store: Store): string {
    const rdfLabels = store.getObjects(node, 'http://www.w3.org/2000/01/rdf-schema#label', null);
    const skosLabels = store.getObjects(node, 'http://www.w3.org/2004/02/skos/core#prefLabel', null);
    const label = rdfLabels.length > 0 ? rdfLabels[0].value : skosLabels.length > 0 ? skosLabels[0].value : undefined;
    return label;
}

const reservedWords = [
    'implements'
];

/**
 * @param entity
 * @param namespace
 */
export function getTs(node: NamedNode, store: Store, namespace: string, entityTypes: { [alias: string]: string }): string {
    const types = store.getObjects(node, 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', null);
    const entityType = types.length > 0 ? Object.entries(entityTypes).find(
        ([_alias, type]) => type === types[0].id,
    ) : undefined;
    const typeAlias = entityType ? entityType[0] : 'OtherIndividual';
    const comment = getComment(node, store);
    let formattedComment = typeof comment === 'string' ? comment.replace(/\n/g, '\n * ') : comment;

    let identifier = node.id.substring(namespace.length);
    if (reservedWords.includes(identifier)) {
        identifier = "_" + identifier;
    }
    if (reservedKeywords.includes(identifier)) {
        formattedComment =
            formattedComment +
            `\n * Note that \`${identifier}\` is a reserved Javascript keyword, and is therefore suffixed by \`__workaround\`.`;
        formattedComment =
            formattedComment +
            '\n * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.';
        identifier = identifier + '__workaround';
    }

    const label = getLabel(node, store);
    return `
/**
 * ${label ?? ''}
 * 
 * ${formattedComment || ''}
 *
 * ${node.id}
 */
export const ${identifier}: ${typeAlias} = '${node.id}';
`;
}

const reservedKeywords = [
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'export',
    'extends',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'implements',
    'in',
    'instanceof',
    'new',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
    'Infinity',
    'NaN',
    'undefined',
    'globalThis',
    'eval',
    'uneval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'encodeURI',
    'encodeURIComponent',
    'decodeURI',
    'decodeURIComponent',
    'escape',
    'unescape',
    'Object',
    'Function',
    'Boolean',
    'Symbol',
    'Error',
    'AggregateError',
    'EvalError',
    'InternalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
    'Number',
    'BigInt',
    'Math',
    'Date',
    'String',
    'RegExp',
    'Array',
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array',
    'Map',
    'Set',
    'WeakMap',
    'WeakSet',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'Atomics',
    'DataView',
    'JSON',
    'Promise',
    'Generator',
    'GeneratorFunction',
    'AsyncFunction',
    'Reflect',
    'Proxy',
    'Intl',
    'Intl.Collator',
    'Intl.DateTimeFormat',
    'Intl.ListFormat',
    'Intl.NumberFormat',
    'Intl.PluralRules',
    'Intl.RelativeTimeFormat',
    'Intl.Locale',
    'WebAssembly',
    'WebAssembly.Module',
    'WebAssembly.Instance',
    'WebAssembly.Memory',
    'WebAssembly.Table',
    'WebAssembly.CompileError',
    'WebAssembly.LinkError',
    'WebAssembly.RuntimeError',
    'arguments',
];

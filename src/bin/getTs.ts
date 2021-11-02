/**
 * @author Vincent Tunri
 * @see {@link https://gitlab.com/vincenttunru/rdf-namespaces}
 */

import { TripleSubject } from 'tripledoc';

/**
 * @param entity
 * @param namespace
 */
export function getTs(entity: TripleSubject, namespace: string, entityTypes: { [alias: string]: string }): string {
    const entityType = Object.entries(entityTypes).find(
        ([_alias, type]) => type === entity.getNodeRef('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
    );
    const typeAlias = entityType ? entityType[0] : 'string';
    const comment = entity.getLiteral('http://www.w3.org/2000/01/rdf-schema#comment');
    let formattedComment = typeof comment === 'string' ? comment.replace(/\n/g, '\n * ') : comment;

    let identifier = entity.asNodeRef().substring(namespace.length);
    if (reservedKeywords.includes(identifier)) {
        formattedComment =
            formattedComment +
            `\n * Note that \`${identifier}\` is a reserved Javascript keyword, and is therefore suffixed by \`__workaround\`.`;
        formattedComment =
            formattedComment +
            '\n * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.';
        identifier = identifier + '__workaround';
    }

    return `
/**
 * ${entity.getLiteral('http://www.w3.org/2000/01/rdf-schema#label') || ''}
 * 
 * ${formattedComment || ''}
 *
 * ${entity.asNodeRef()}
 */
export const ${identifier}: ${typeAlias} = '${entity.asNodeRef()}';
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

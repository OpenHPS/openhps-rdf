/**
 * Deep merge objects
 *
 * @param {any} target Target object
 * @param {any} source Source object
 * @returns {any} Merged object
 */
export function mergeDeep(target: any, source: any) {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (Array.isArray(source[key])) {
                output[key] = source[key];
                output[key].push(...(target[key] || []));
            } else if (isObject(source[key])) {
                if (!(key in target)) Object.assign(output, { [key]: source[key] });
                else output[key] = mergeDeep(target[key], source[key]);
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}

/**
 * Check if something is an object
 *
 * @param {any} item Item to check for object
 * @returns {boolean} Is an object
 */
function isObject(item: any) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

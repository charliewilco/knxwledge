// https://medium.freecodecamp.org/understanding-memoize-in-javascript-51d07d19430e
/**
 * Memoizes a single-argument function using the first argument as cache key.
 */
export function memoize<T>(fn: Function): Function {
	let cache: Record<string, T> = {};

	// biome-ignore lint/suspicious/noExplicitAny: Arguments can be anything.
	return (...args: any[]): T => {
		let n = args[0];
		if (n in cache) {
			return cache[n];
		}
		let result = fn(n);
		cache[n] = result;
		return result;
	};
}

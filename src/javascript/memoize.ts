// https://medium.freecodecamp.org/understanding-memoize-in-javascript-51d07d19430e
export function memoize<T>(fn: Function): Function {
	let cache: Record<string, any> = {};

	return (...args: any[]): T => {
		let n = args[0];
		if (n in cache) {
			return cache[n];
		} else {
			let result = fn(n);
			cache[n] = result;
			return result;
		}
	};
}

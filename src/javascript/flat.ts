export function flatIterative<T>(input: T[]): T[] {
	const result: T[] = [];
	const stack = Array.from(input);

	while (stack.length > 0) {
		const next = stack.shift();

		Array.isArray(next) ? stack.unshift(...next) : result.push(next);
	}

	return result;
}

export function flatRecursive<T>(input: T[], depth: number = 1): T[] {
	return depth > 0
		? input.reduce(
				(acc, val) => acc.concat(Array.isArray(val) ? flatRecursive(val, depth - 1) : val),
				[],
			)
		: input.slice();
}

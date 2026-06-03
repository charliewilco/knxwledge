/**
 * Debounces a function so it only fires after a wait period.
 */
export function debounce(
	fn: (...args: unknown[]) => unknown,
	wait: number,
	immediate: boolean = false,
) {
	let timeout: NodeJS.Timeout | null = null;
	return function runFn(this: unknown, ...args: unknown[]) {
		const later = () => {
			timeout = null;
			!immediate && fn.apply(this, args);
		};

		const callNow = immediate && !timeout;

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) fn.apply(this, args);
	};
}

/**
 * Throttles a function to fire at most once per wait period.
 */
export function throttle(fn: (...args: unknown[]) => unknown, wait: number) {
	let lastCalled: number | undefined;
	let previousCall: number | undefined;
	return function runner(this: unknown, ...args: unknown[]) {
		lastCalled = Date.now();

		if (!previousCall && lastCalled - previousCall > wait) {
			fn.apply(this, args);
		}
	};
}

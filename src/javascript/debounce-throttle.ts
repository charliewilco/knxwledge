/**
 * Debounces a function so it only fires after a wait period.
 */
export function debounce(fn: Function, wait: number, immediate: boolean = false) {
	let timeout: NodeJS.Timeout | null = null;
	return function runFn() {
		const args = arguments;
		// biome-ignore lint/complexity/noUselessThisAlias: clearer to apply context to the given function
		const context = this;

		const later = () => {
			timeout = null;
			!immediate && fn.apply(context, args);
		};

		const callNow = immediate && !timeout;

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) fn.apply(context, args);
	};
}

/**
 * Throttles a function to fire at most once per wait period.
 */
export function throttle(fn: Function, wait: number) {
	let lastCalled: number | undefined;
	let previousCall: number | undefined;
	return function runner() {
		lastCalled = Date.now();
		const args = arguments;
		// biome-ignore lint/complexity/noUselessThisAlias: clearer to apply context to the given function
		const context = this;

		if (!previousCall && lastCalled - previousCall > wait) {
			fn.apply(context, args);
		}
	};
}

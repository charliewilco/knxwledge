export function debounce(
	fn: Function,
	wait: number,
	immediate: boolean = false,
) {
	let timeout: Timer | null = null;
	return function runFn() {
		const args = arguments;
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

export function throttle(fn: Function, wait: number) {
	let lastCalled: number | undefined;
	let previousCall: number | undefined;
	return function runner() {
		lastCalled = Date.now();
		const args = arguments;
		const context = this;

		if (!previousCall && lastCalled - previousCall > wait) {
			fn.apply(context, args);
		}
	};
}

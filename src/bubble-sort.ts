export function bubbleSort<T>(array: T[]): T[] {
	// Creates a clone of the array
	array = array.slice();

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				let swap = array[j];
				array[j] = array[j + 1];
				array[j + 1] = swap;
			}
		}
	}

	return array;
}

export function betterBubbling<T>(array: T[]): T[] {
	// Creates a clone of the array
	array = array.slice();

	for (let i = 0; i < array.length; i++) {
		let isDone: boolean = true;
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				isDone = false;
				let swap = array[j];
				array[j] = array[j + 1];
				array[j + 1] = swap;
			}
		}
		if (isDone) {
			break;
		}
	}

	return array;
}

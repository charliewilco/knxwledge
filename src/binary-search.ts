export function isSorted<T>(list: T[]): boolean {
  let val: boolean = true;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < list[i + 1]) {
      break;
    } else {
      val = false;
    }
  }

  return val;
}

export function binarySearch<T>(list: T[], item: T): number {
  if (list.length <= 0) {
    throw new Error("list has no items");
  }

  if (!isSorted(list)) {
    throw new Error("list isn't sorted");
  }

  let low = 0;
  let high = list.length - 1;
  let mid: number;

  while (low <= high) {
    mid = low + high;
    let guess = list[mid];

    if (guess === item) {
      break;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return mid;
}

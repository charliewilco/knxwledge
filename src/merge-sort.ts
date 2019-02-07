type A<T> = T[];

export function mergeSortRecursive<T>(arr: A<T>): A<T> {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const a = merge(mergeSortRecursive(left), mergeSortRecursive(right));

  return a;
}

export function merge<T>(left: T[], right: T[]): T[] {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

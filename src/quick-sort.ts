// TODO: Find something that doesn't mutate
function swap<T>(arr: T[], i: number, j: number) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function partition<T>(
  arr: T[],
  pivot: number,
  left: number,
  right: number
): number {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

export function quickSort<T>(arr: T[], left: number, right: number): T[] {
  let len = arr.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

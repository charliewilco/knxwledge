export function longestIncrSequence(arr: number[]): number[] {
  if (arr.length > 0) {
    let longestIndex = -1;
    let longestLen = 0;
    let currentIndex = 0;
    let currentLen = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        // Sequence stays
        currentLen++;
      } else {
        if (currentLen > longestLen) {
          longestLen = currentLen;
          longestIndex = currentIndex;
        }
        // Sequence is broken
        currentIndex = i;
        currentLen = 0;
      }
    }

    // This doesn't mutate the array, but it creates a clone of the input
    const result: number[] = Array.from(arr).splice(longestIndex, longestLen + 1);

    return result.length < 2 ? [] : result;
  } else {
    return [];
  }
}

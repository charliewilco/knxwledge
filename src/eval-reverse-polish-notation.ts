export default function evalRPNotation(notationString: string): number {
  const operationTuple: number[] = [];
  const splitInput: string[] = notationString.split(" ");

  function doCorrectMathBasedOnOperator(
    operator: string,
    a: number,
    b: number
  ): number {
    if (operator === "+") {
      return a + b;
    } else if (operator === "-") {
      return a - b;
    } else if (operator === "*") {
      return a * b;
    } else if (operator === "/") {
      return a / b;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < splitInput.length; i++) {
    const n: number = Number(splitInput[i]);
    if (Number.isInteger(n)) {
      // We're dividing the input between operators and numbers. we only want to save numbers and they're
      // accumulation (like a reducer almost). So we've discovered that n is an actual integer so we save it

      // We're only ever going to work on two numbers at a time, so this is almost a tuple
      operationTuple.push(n);
    } else {
      // Since the first operator is only available after two numbers exist we're going to pop each off of the array.
      // operationTuple should be at this point equal to [n, n]
      let a = operationTuple.shift();
      let b = operationTuple.shift();

      // Now the array should be equal to []

      // Then we push back the accumlated value.
      operationTuple.push(doCorrectMathBasedOnOperator(splitInput[i], a, b));
      // [n]
    }
  }

  // Ex
  // [5, 3]
  // [8]
  // [8, 2]
  // [16]

  if (operationTuple.length > 1) {
    // At this point we should've reduced all the items in the array to a single integer.
    throw new Error("Something went wrong");
  } else {
    return operationTuple.pop();
  }
}

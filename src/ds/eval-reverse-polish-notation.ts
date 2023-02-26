/**
 * Reverse Polish Notation (RPN) is a mathematical notation in which operators follow their operands.
 * This notation is also known as postfix notation. In RPN, instead of using parentheses to indicate
 * the order of operations, the operator is written after its operands, so the expression "2 + 3"
 * would be written as "2 3 +". RPN is used in some calculators and programming languages, such as
 * Forth and PostScript, because it is simpler to parse than infix notation.
 *
 * RPN expressions can be evaluated using a stack. Each operand is pushed onto the stack, and when
 * an operator is encountered, the top elements are popped off the stack, the operation is performed,
 * and the result is pushed back onto the stack. This process continues until the entire expression
 * has been evaluated, and the final result is the last element on the stack.
 *
 * For example, to evaluate the RPN expression "2 3 + 4 *", we would first push 2 and 3 onto the stack.
 * When we encounter the "+" operator, we pop 3 and 2 off the stack, add them together to get 5, and
 * push 5 back onto the stack. We then push 4 onto the stack. When we encounter the "*" operator, we
 * pop 4 and 5 off the stack, multiply them together to get 20, and push 20 back onto the stack. The
 * final result is 20, which is the last element on the stack.
 *
 * @param notationString - The string to evaluate
 */
export function evalRPNotation(notationString: string): number {
	const operationTuple: number[] = [];
	const splitInput: string[] = notationString.split(" ");

	function doCorrectMathBasedOnOperator(operator: string, a: number, b: number): number {
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
	}

	return operationTuple.pop()!;
}

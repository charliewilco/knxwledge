import assert from "node:assert/strict";
import { describe, mock as nodeMock, test } from "node:test";

type Mockable<Arguments extends unknown[] = unknown[], Return = unknown> = (
	...args: Arguments
) => Return;

type MockLike = {
	mock?: {
		callCount?: () => number;
		calls?: unknown[];
	};
};

type Expectation<Value> = {
	not: Expectation<Value>;
	toBe(expected: Value): void;
	toBeFalsy(): void;
	toBeGreaterThan(expected: number): void;
	toBeInstanceOf(expected: Function): void;
	toBeNull(): void;
	toBeTruthy(): void;
	toBeUndefined(): void;
	toContain(expected: unknown): void;
	toEqual(expected: unknown): void;
	toHaveBeenCalled(): void;
	toHaveBeenCalledTimes(expected: number): void;
	toHaveLength(expected: number): void;
	toStrictEqual(expected: unknown): void;
	toThrow(expected?: string | RegExp): void;
};

function getCallCount(value: unknown): number {
	const mockState = (value as MockLike).mock;

	if (typeof mockState?.callCount === "function") {
		return mockState.callCount();
	}

	return mockState?.calls?.length ?? 0;
}

function assertContains(value: unknown, expected: unknown, negate: boolean): void {
	if (value == null || typeof (value as { includes?: unknown }).includes !== "function") {
		throw new TypeError("Expected a value with an includes method");
	}

	const result = (value as { includes(expected: unknown): boolean }).includes(expected);
	assert.equal(result, !negate);
}

function assertLength(value: unknown, expected: number, negate: boolean): void {
	if (value == null || !("length" in Object(value))) {
		throw new TypeError("Expected a value with a length property");
	}

	const length = (value as { length: number }).length;
	assert.equal(length === expected, !negate);
}

function createExpectation<Value>(value: Value, negate = false): Expectation<Value> {
	const compare = (condition: boolean): void => {
		assert.equal(condition, !negate);
	};

	const expectation = {
		get not(): Expectation<Value> {
			return createExpectation(value, !negate);
		},
		toBe(expected: Value): void {
			compare(Object.is(value, expected));
		},
		toBeFalsy(): void {
			compare(!value);
		},
		toBeGreaterThan(expected: number): void {
			compare(Number(value) > expected);
		},
		toBeInstanceOf(expected: Function): void {
			compare(value instanceof expected);
		},
		toBeNull(): void {
			compare(value === null);
		},
		toBeTruthy(): void {
			compare(Boolean(value));
		},
		toBeUndefined(): void {
			compare(value === undefined);
		},
		toContain(expected: unknown): void {
			assertContains(value, expected, negate);
		},
		toEqual(expected: unknown): void {
			if (negate) {
				assert.notDeepStrictEqual(value, expected);
				return;
			}

			assert.deepStrictEqual(value, expected);
		},
		toHaveBeenCalled(): void {
			compare(getCallCount(value) > 0);
		},
		toHaveBeenCalledTimes(expected: number): void {
			compare(getCallCount(value) === expected);
		},
		toHaveLength(expected: number): void {
			assertLength(value, expected, negate);
		},
		toStrictEqual(expected: unknown): void {
			if (negate) {
				assert.notDeepStrictEqual(value, expected);
				return;
			}

			assert.deepStrictEqual(value, expected);
		},
		toThrow(expected?: string | RegExp): void {
			if (typeof value !== "function") {
				throw new TypeError("Expected a function");
			}

			if (negate) {
				assert.doesNotThrow(value as () => unknown);
				return;
			}

			if (typeof expected === "string") {
				assert.throws(value as () => unknown, { message: expected });
				return;
			}

			assert.throws(value as () => unknown, expected);
		},
	};

	return expectation;
}

function mock<Arguments extends unknown[], Return>(
	implementation?: Mockable<Arguments, Return>,
): Mockable<Arguments, Return> {
	const fallback = ((): undefined => undefined) as Mockable<Arguments, Return>;

	return nodeMock.fn(implementation ?? fallback);
}

export { describe, mock, test };
export function expect<Value>(value: Value): Expectation<Value> {
	return createExpectation(value);
}

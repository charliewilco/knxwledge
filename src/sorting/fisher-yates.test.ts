import { describe, expect, test } from "@jest/globals";
import { FisherYatesShuffle } from "./fisher-yates.ts";
import type { ShuffledReport } from "./fisher-yates.ts";

const MOCK_DATA = [9, 8, 7, 3, 4, 6, 2, 5, 1];

const shuffle = new FisherYatesShuffle(MOCK_DATA);
const report: ShuffledReport = shuffle.generateReport();

describe("Shuffle", () => {
	test("randomized items array and initial array lengths equal", () => {
		expect(MOCK_DATA.length).toEqual(shuffle.result.length);
	});

	test("passes check and exceeds thresholds", () => {
		expect(shuffle.resultDetails.passes).toBeTruthy();

		expect(shuffle.checkThresholds()).toBeGreaterThan(1);
	});

	test("contains different items", () => {
		for (let i of report.indexes) {
			expect(shuffle.result[i]).not.toEqual(MOCK_DATA[i]);
		}
	});

	test("from", () => {
		const shuffled = FisherYatesShuffle.from(MOCK_DATA);
		expect(shuffled).toBeInstanceOf(FisherYatesShuffle);
		expect(shuffled.result).not.toEqual(MOCK_DATA);
	});
});

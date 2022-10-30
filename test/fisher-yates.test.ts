import { ModernShuffle, ShuffledReport } from "../src";

const shuffle = new ModernShuffle(ModernShuffle.mockData);
const report: ShuffledReport = shuffle.generateReport();

describe("Shuffle", () => {
	test("randomized items array and initial array lengths equal", () => {
		expect(ModernShuffle.mockData.length).toEqual(shuffle.result.length);
	});

	test("passes check and exceeds thresholds", () => {
		expect(shuffle.resultDetails.passes).toBeTruthy();

		expect(shuffle.checkThresholds()).toBeGreaterThan(1);
	});

	test("contains different items", () => {
		report.indexes.forEach((i) => {
			expect(shuffle.result[i]).not.toEqual(ModernShuffle.mockData[i]);
		});
	});
});

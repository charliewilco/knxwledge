export interface IShuffledReport {
	count: number;
	potential: number;
	passes: boolean;
	indexes: number[];
}

export class ModernShuffle<T> {
	private _input: T[];
	private _thresholds: number[] = [0.25, 0.5, 0.75];
	public result: T[];
	public resultDetails: IShuffledReport;
	public static mockData: number[] = [9, 8, 7, 3, 4, 6, 2, 5, 1];

	constructor(input: T[]) {
		this._input = input;
		this.result = this.randomize();
		this.resultDetails = this.generateReport();
	}

	private randomize(): T[] {
		const clone = Array.from(this._input);
		let index = this._input.length;

		while (--index > 0) {
			let randomIndex = Math.floor(Math.random() * (index + 1));
			// capture value
			let temp = clone[randomIndex];
			clone[randomIndex] = clone[index];
			clone[index] = temp;
		}

		return clone;
	}

	public checkThresholds(): number {
		const report = this.resultDetails;
		let passes = 0;
		this._thresholds.forEach((threshold) => {
			report.count > report.potential * threshold && ++passes;
		});

		return passes;
	}

	public generateReport(): IShuffledReport {
		let count: number = 0;
		let indexes: number[] = [];
		this._input.forEach((item, i) => {
			const isEqual = Object.is(item, this.result[i]);
			if (!isEqual) {
				++count;
				indexes.push(i);
			}
		});

		const passes: boolean = count > this._input.length / 2;
		const potential: number = this._input.length;

		return {
			passes,
			indexes,
			count,
			potential,
		};
	}
}

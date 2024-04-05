export class _ {
	public static getPath(path: string): string[] {
		const chars = path.split("");
		const results = [];

		let temp: string = "";

		for (let i = 0; i < chars.length; i++) {
			const c = chars[i];

			if (c === "[" || c === "]" || c === ".") {
				if (temp !== "") results.push(temp);
				temp = "";
			} else {
				temp += c;
			}

			if (i === chars.length - 1 && temp !== "") {
				results.push(temp);
			}
		}

		return results;
	}

	// biome-ignore lint/suspicious/noExplicitAny: param must be ambiguous
	public static has(data: any, path: string): boolean {
		const keys = _.getPath(path);
		let result = false;
		while (keys.length > 0) {
			const key: string = keys.shift();

			if (data[key]) {
				result = true;
			} else {
				result = false;
				break;
			}
		}

		return result;
	}

	// biome-ignore lint/suspicious/noExplicitAny: param must be ambiguous
	public static get<T>(data: any, path: string): T | undefined {
		const keys = _.getPath(path);
		let current = data;

		while (keys.length > 0) {
			const key: string = keys.shift();
			const item: T = current[key];

			current = item;

			if (!item) {
				current = undefined;
				break;
			}
		}

		return current;
	}
}

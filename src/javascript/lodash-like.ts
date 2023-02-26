export class _ {
	public static getPath(path: string): string[] {
		const chars = path.split("");
		const results = [];

		let temp: string = "";

		for (var i = 0; i < chars.length; i++) {
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

	public static get<T>(data: any, path: string): T | undefined {
		const keys = _.getPath(path);
		let current = data;

		while (keys.length > 0) {
			const key: string = keys.shift();
			const item: any = current[key];

			current = item;

			if (!item) {
				current = undefined;
				break;
			}
		}

		return current;
	}
}

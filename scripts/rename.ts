import fs from "node:fs";
import { join } from "node:path";

export async function rename(file: string) {
	let src = join("./dist", file);
	let dest = join("./", file);
	console.log(
		"\x1b[2m\x1b[31m%s\x1b[0m",
		src,
		" 🔜 ",
		"\x1b[34m%s\x1b[0m",
		dest
	);
	return fs.promises.rename(src, dest);
}

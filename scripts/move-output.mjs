// @ts-check

import fs from "node:fs/promises";
import path from "node:path";
import chalk from "chalk";

let files = await fs.readdir("./dist");

async function rename(file) {
	let src = path.join("./dist", file);
	let dest = path.join("./", file);
	console.log(chalk.dim.red(src), " 🔜 ", chalk.blue(dest));
	return fs.rename(src, dest);
}

await Promise.all(files.map(rename));

import fs from "node:fs/promises";
import path from "node:path";
import chalk from "chalk";
import arg from "arg";
import dts from "bun-plugin-dts";

const entrypoints = [
	"src/ds.ts",
	"src/index.ts",
	"src/js.ts",
	"src/problems.ts",
	"src/search.ts",
	"src/sorting.ts",
];

const args = arg({
	"--moveOutput": Boolean,
	"-m": "--moveOutput"
})

async function rename(file: string) {
	let src = path.join("./dist", file);
	let dest = path.join("./", file);
	console.log(chalk.dim.red(src), " 🔜 ", chalk.blue(dest));
	return fs.rename(src, dest);
}

const output = await Bun.build({
	entrypoints,
	outdir: "./dist",
	sourcemap: "external",
	splitting: false,
	format: "esm",
	plugins: [dts()],
});

if (output.success && !args["--moveOutput"]) {
	const files = await fs.readdir("./dist");
	await Promise.all(files.map(rename));
}


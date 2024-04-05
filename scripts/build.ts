import fsPromises from "node:fs/promises";
import path from "node:path";
import arg from "arg";
import { dtsPlugin } from "./dts";

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
	"-m": "--moveOutput",
});

async function rename(file: string) {
	let src = path.join("./dist", file);
	let dest = path.join("./", file);
	console.log(
		"\x1b[2m\x1b[31m%s\x1b[0m",
		src,
		" 🔜 ",
		"\x1b[34m%s\x1b[0m",
		dest,
	);
	return fsPromises.rename(src, dest);
}

const output = await Bun.build({
	entrypoints,
	outdir: "./dist",
	sourcemap: "external",
	splitting: false,
	format: "esm",
	plugins: [dtsPlugin()],
});

if (output.success && !args["--moveOutput"]) {
	const files = await fsPromises.readdir("./dist");
	await Promise.all(files.map(rename));
}

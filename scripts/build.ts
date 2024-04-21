import fs from "node:fs";
import arg from "arg";
import { rename } from "./rename";
import { dtsPlugin } from "./dts";

const args = arg({
	"--moveOutput": Boolean,
	"-m": "--moveOutput",
});

const output = await Bun.build({
	entrypoints: ["src/ds.ts", "src/index.ts", "src/js.ts", "src/problems.ts", "src/search.ts", "src/sorting.ts"],
	outdir: "./dist",
	sourcemap: "external",
	splitting: false,
	format: "esm",
	plugins: [dtsPlugin()],
});

if (output.success && !args["--moveOutput"]) {
	const files = await fs.promises.readdir("./dist");
	await Promise.all(files.map(rename));
}

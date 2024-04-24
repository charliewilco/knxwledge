import fs from "node:fs";
import { join } from "node:path";
import arg from "arg";
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
	async function rename(file: string) {
		let src = join("./dist", file);
		let dest = join("./", file);
		console.log("\x1b[2m\x1b[31m%s\x1b[0m", src, " 🔜 ", "\x1b[34m%s\x1b[0m", dest);
		return fs.promises.rename(src, dest);
	}

	const files = await fs.promises.readdir("./dist");
	await Promise.all(files.map(rename));
}

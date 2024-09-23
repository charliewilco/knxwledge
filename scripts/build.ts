import { parseArgs } from "node:util";
import { dtsPlugin } from "./dts";

const { values } = parseArgs({
	args: Bun.argv,
	options: {
		moveOutput: {
			type: "boolean",
			short: "m",
		},
	},
	allowPositionals: true,
});

const output = await Bun.build({
	entrypoints: [
		"src/ds.ts",
		"src/index.ts",
		"src/js.ts",
		"src/problems.ts",
		"src/search.ts",
		"src/sorting.ts",
	],
	outdir: "./dist",
	sourcemap: "external",
	splitting: false,
	format: "esm",
	plugins: [dtsPlugin()],
});

if (output.success && !values.moveOutput) {
	for (const buildArtifact of output.outputs) {
		console.log(buildArtifact.path);
	}
}

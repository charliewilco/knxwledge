import { defineConfig } from "tsdown/config";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/problems.ts",
		"src/search.ts",
		"src/sorting.ts",
		"src/ds.ts",
		"src/js.ts",
	],
	outDir: "dist",
	clean: true,
	minify: true,
	publint: true,
	platform: "neutral",
	format: ["esm"],
	dts: true,
});

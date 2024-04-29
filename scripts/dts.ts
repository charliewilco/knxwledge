import fs from "node:fs";
import path from "node:path";
import { generateDtsBundle } from "dts-bundle-generator";

import type { BunPlugin } from "bun";
import type { CompilationOptions, EntryPointConfig } from "dts-bundle-generator";

type Options = Omit<EntryPointConfig, "filePath"> & {
	compilationOptions?: CompilationOptions;
};

export const dtsPlugin = (options?: Options): BunPlugin => {
	return {
		name: "dts-emitter",
		async setup(build) {
			const { compilationOptions, ...rest } = options || {};

			const entrypoints = [...build.config.entrypoints].sort();
			const entries = entrypoints.map((entry) => {
				return {
					filePath: entry,
					...rest,
				};
			});

			const result = generateDtsBundle(entries, {
				...compilationOptions,
				preferredConfigPath: "./tsconfig.json",
			});

			const outDir = build.config.outdir || "./dist";
			if (!fs.existsSync(outDir)) {
				fs.mkdirSync(outDir);
			}

			await Promise.all(
				entrypoints.map((entry, index) => {
					const dtsFile = entry.replace(/^.*\//, "").replace(/\.[jtm]s$/, ".d.ts");
					const outFile = path.join(outDir, dtsFile);
					return Bun.write(outFile, result[index]);
				}),
			);
		},
	};
};

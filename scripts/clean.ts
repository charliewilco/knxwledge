// @ts-check

import { Glob, $ } from "bun";
import arg from "arg";
import path from "node:path";

const buildOuputPaths = ["./dist", "./*.js", "./*.mjs", "./*.d.ts", "./*.map"];

const args = arg({
	"--dryrun": Boolean,
	"-d": "--dryrun",
});

const rmrf = (path: string) => $`rm -rf ${path}`;

async function main() {
	const removedPaths: string[] = [];

	const globs = buildOuputPaths.map((paths) => new Glob(paths));

	const files = globs.flatMap((g) => [...g.scanSync()]);

	if (!process.env.CI) {
		if (args["--dryrun"]) {
			removedPaths.push(...files);
		}

		if (!args["--dryrun"]) {
			await Promise.all(files.map((file) => rmrf(file).then(() => removedPaths.push(file))));
		}

		if (args["--dryrun"]) {
			console.log("Would-be deleted directories:\n");
		} else {
			console.log("Deleted directories:\n");
		}

		for (const removed of removedPaths) {
			console.log("♻️ ", "\x1b[1m\x1b[32m%s\x1b[0m", path.relative(process.cwd(), removed));
		}
	}
}

main();

// @ts-check

import { deleteAsync } from "del";
import arg from "arg";
import path from "node:path";

const buildOuputPaths = ["./dist", "./*.js", "./*.d.ts", "./*.mjs", "./*.map"];

const args = arg({
	"--dryrun": Boolean,
	"-d": "--dryrun",
});

async function main() {
	if (!process.env.CI) {
		const removedPaths = await deleteAsync(buildOuputPaths, {
			dryRun: args["--dryrun"],
		});

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

// @ts-check

import { deleteAsync } from "del";
import chalk from "chalk";
import arg from "arg";
import path from "node:path";

let buildOuputPaths = ["./dist", "./*.js", "./*.d.ts", "./*.mjs", "./*.map"];

let args = arg({
	"--dryrun": Boolean,
	"-d": "--dryrun",
});

async function main() {
  if (!process.env.CI) {
    let removedPaths = await deleteAsync(buildOuputPaths, {
      dryRun: args["--dryrun"],
    });

    if (args["--dryrun"]) {
      console.log("Would-be deleted directories:\n");
    } else {
      console.log("Deleted directories:\n");
    }

    for (let removed of removedPaths) {
      console.log("♻️ ", chalk.bold.green(path.relative(process.cwd(), removed)));
    }
  }
}


main();

// publish git

import { execSync } from 'child_process';
import Log from './src/Log';
// obtain the args!!
const args = process.argv.slice(2);
const commitMessage = args.join(" ") || "auto commit";
Log.info("Commit message: " + commitMessage);
async function main() {
    Log.log("Publishing to git...")
    await publishToGit();
    Log.log("Published to git!")
}
async function publishToGit() {
    Log.log("Trying to add all files...")
    execSync('git add .');
    Log.log("Added all files!\nTrying to commit...")
    execSync(`git commit -m "${commitMessage.replace("\"", "\\\"")}"`);
    Log.log("Committed!\nTrying to push...")
    execSync('git push');
    Log.log("Pushed!")
}


// main
main();
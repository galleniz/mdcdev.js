// publish git

import { exec, execSync } from 'child_process';
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
    execSync("git pull origin main");

    Log.log("Trying to add all files...")
    // Get files, and add them each updating with commitMessage + " update " + fileName, then push
    // example: if an file was modified, it will be added to the commit, and the commit message will be "auto commit update example.ts"

    // get files
    const files = execSync("git status -s").toString().split("\n").filter(f => f.trim() !== "" );

    Log.log("Files: " + files.join(", "));

    // Add each file
    files.forEach(file => {
        var fileStatus = file.slice(0, 1).trim();
        var filePath = file.slice(2).trim();
        Log.info("Adding file: ./" + filePath);
        execSync(`git add ./${filePath}`);
        // comit it
        Log.info("Committing file: " + file);
        // if file is created put "create" instead of "update", or if it was deleted put "delete"

        console.log(filePath);
        var type = fileStatus.startsWith("A") ? "Create" : fileStatus.startsWith("D") ? "Delete" : "Update";
      
        var commit = `${commitMessage} | ${type} ${filePath}`;
        // if the commit supera the max length, cut the first part of the commit message
        if (commit.length > 60) {
            commit = commit.slice(0, 60);
        }
        execSync(`git commit -m ""`);
    });

    try {
        execSync("git add .")
        execSync(`git commit -m "${commitMessage}"`);
    } catch(e) {}

    // push
    execSync("git push");

    

}


// main
main();
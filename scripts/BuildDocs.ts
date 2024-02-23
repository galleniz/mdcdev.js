// based on the old file build.js

import { exec } from 'child_process';
import { promisify } from 'util';
import { join } from 'path';
import fs from 'fs';
import Log from './src/Log';
const execAsync = promisify(exec);

const dir = join(__dirname, './docs');
async function main() {
    Log.log("Rawr! trying to run dis!! ")
    await deleteoldDocs();
    Log.log("Now trying to build the docs!")
    await buildDocs();
    Log.log("Compiled!")
}
async function getOpenCommand() {
    switch (process.platform) {
        case 'win32':
            return 'start';
        case 'linux':
            return 'xdg-open';
        case 'darwin':
            return 'open';
        default:
            throw new Error('Unsupported platform');
    }
}
async function deleteoldDocs() {
    Log.log("Rawr! Deleting old docs!")
    if (fs.existsSync(dir)) {
        fs.rmdirSync(dir, {
            recursive: true
        });
    }
}

async function buildDocs() {
    Log.log("Trying to build nwn")
    await execAsync('npx typedoc');
    Log.log("Built nwn\nTrying to open the server docs...")

    // open server with the docs
    exec('npx http-server ./docs'); // this will not await, because it will be running forever
    Log.log("Yay, it wa oppened!, now opening the browser...")

    // open the browser of the user
    const stupidOpen = await getOpenCommand();
    await execAsync( stupidOpen + ' http://localhost:8080');
    Log.log("Oh, it was oppened!")
}


// main
main();
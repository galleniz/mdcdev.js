// Build all rawr

import { exec } from 'child_process';
import { promisify } from 'util';
import { join } from 'path';
import fs from 'fs';
import Log from './src/Log';

const execAsync = promisify(exec);

const dir = join(__dirname, './'); // compiling the source, using index.ts as the entry point / main

async function main() {
    
    Log.log("Compiling the source...")
    await deleteOldDist();
    await compileSource();

}
async function deleteOldDist() {
    Log.info("Deleting old dist...")
    if (fs.existsSync(dir + 'dist')) {
        fs.rmdirSync(dir + 'dist', {
            recursive: true
        });
    }
    Log.log("Deleted old dist!")
}
async function compileSource() {
    Log.log("Trying to compile the source...")
    await execAsync('npx tsc');
    Log.log("Compiled the source!")
}

// main
main();
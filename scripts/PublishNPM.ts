// publish npm script :OOOO

import { execSync } from 'child_process';
import Log from './src/Log';

async function main() {
    Log.log("Publishing to npm...")
    await publishToNpm();
    Log.log("Published to npm!")
}

async function publishToNpm() {
    Log.log("Trying to publish...")
    execSync('npm publish');
    Log.log("Published!")
}
main();
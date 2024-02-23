// Running all scripts!!
import Log from './src/Log';

async function main() {
    Log.log("Running all scripts!!")
    await runAll();
    Log.log("Ran all scripts!!")
}

async function runAll() {  
    // first we run build
    await import('./Build');
    // now will be publish to npm
    await import('./PublishNPM');
    
    // now will compile da docs for gitHub
    await import('./BuildDocs');
    // And lastly, we will publish to git
    await import('./PublishGit');
    // Simple, right? :D
}

main()
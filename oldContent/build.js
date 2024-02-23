// using this script from package.json to this script to build the project
//     "build:doc": "node rmDoc.js && tsc && typedoc && http-server ./docs && node -e \"const { exec } = require('child_process'); if (process.platform === 'win32') { exec('start http://localhost:8080'); } else if (process.platform === 'darwin') { exec('open http://localhost:8080'); } else { exec('xdg-open http://localhost:8080'); }\""
console.warn("this is INVALID file and decraped, use BuildDocs.ts instead")
const {exec} = require("child_process");
const fs = require('fs');
const path = require('path');
const dir = "./docs";

async function rmDoc() {
    try {

        // i dont wanna to delete tis

       function deleteFrom(dir) {
           fs.readdirSync(dir).forEach(file => {
               const filePath = path.join(dir, file);
               if(fs.statSync(filePath
                  ).isDirectory()) {
                    if (fs.readdirSync(filePath).length > 0) {
    
                    deleteFrom(filePath);
                    } else {
                        fs.rmdirSync(filePath);
                
                    }
                  }
                    else {
                        fs.unlinkSync(filePath);
                    }
             }
             );
        }
        deleteFrom(dir);
        console.log("The documentation has been deleted yay :3. Now I'm going to compile the project.");
    }catch(err) {
        
        console.log("Esto es abismal")
        console.log("Es la muerte, sin más")
        console.log("Y por poco caí, en las garras del mal");
    
        console.error(err);
    }
    
}
console.log ("Hai hai nwn, I'm going to compile the project now. Please wait a moment :3")
async function compile() {
    rmDoc();
    console.log("Compiling the project...")
    exec("npx typedoc", (err, stdout, stderr) => {
        try {
            console.log("In theory, the project has been compiled.");

            if (err || stderr) {
                console.log(err ? err : stderr);
                throw err ? err : stderr;
            }

            console.log(stdout);
            console.log("Yay, it's been compiled, now I'm going to start the server to view the documentation. Please wait a moment :3");
        } catch (error) {
            console.error(error);
        }

        // Start a server to view the documentation
        exec("http-server ./docs", (err, stdout, stderr) => {
            if(err || stderr) {
                console.log(err || stderr);
                throw err|| stderr;
            }
            console.log(stdout);

            console.log("Oh, this works!!11, the server ws started listening on port 8080 of localhost. (http://localhost:8080) (dir: ./docs)")
            console.log("Now I'm going to open the browser to view the documentation. Please wait a moment :3")
            // open the browser
            console.log("The user is using a " + process.platform + " machine. Opening the browser...");
            if(process.platform === "win32") {
                exec("start http://localhost:8080");
            } else if(process.platform === "darwin") {
                exec("open http://localhost:8080");
            } else {
                exec("xdg-open http://localhost:8080");
            }
        });
    });
}

compile();

// if the user cancel the command run this
process.on("SIGABRT", () => {
    console.log("Esto es abismal.");
    console.log("Es la muerte, sin más.");
    console.log("Y por poco caí, en las garras del mal.");
    console.log("Yo alastor, juro que no terminé");
    // killin the process
    process.kill(process.pid);

    
});
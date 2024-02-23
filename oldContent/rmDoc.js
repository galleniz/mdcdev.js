module.exports = ()=>{try {

    // i dont wanna to delete tis
    const fs = require('fs');
    const path = require('path');
    const dir = "./docs";
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
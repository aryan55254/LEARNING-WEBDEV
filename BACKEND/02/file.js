const fs = require("fs");
//its a built in module to interact with files
fs.writeFileSync("./test.txt","hello");
fs.writeFile("./t.txt","hello",(err)=> {});
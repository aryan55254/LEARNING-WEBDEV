const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url} New Request Recieved\n`;
    fs.appendFile('log.txt', log, (err) => { 
        if (err) {
            console.error("Error writing to file:", err);
        }
    });
    switch(req.url){
        case '/' : res.end("homepage"); break; 
        case '/about' : res.end("you are at about page"); break;
        default:
            res.end("Page not found");
            break;
      }
});

server.listen(9000,()=>{console.log("server started")});
const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log(req.headers);
    console.log("New request received");
    res.end("Hello from server");
});

// Start the server on port 8000
myServer.listen(8080, () => {
    console.log("Server started on port 8080");
});

//the function inside myserver.listen responsible to handle incoming request
//req has all meta deta of request , res is response 
//8000 is a port they are like doors u can't run multiple servers on a single port
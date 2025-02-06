//client sends a reques to a server(node js server)
//event queue =all requests are queued in this 
// then they go to the event loop it is a amchine that watches over event queue , picks eaach req one by one 
//two type req blocking(sync) and non-blocking(aysnc) 
//it will process non blocking ones and send response to the user
//if its a blocking request it goes to thread pool (threads are responsible to fulfil the request) if a thread/worker is free 
//by default there are 4 free workers 
//is all workers are busy then 5th has to wait 
//blocking operations have scalibility issues 
//default thread pool size is 4 u can add thread if u have more cores in cpuconst fs = require("fs");

fs.readFile("contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.error("Error reading the file", err);
        return;
    }
    console.log(result); // Correct place to log the file content
});

console.log("2"); // This will execute before file reading is completed
const fs = require("fs");

fs.readFile("contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.error("Error reading the file", err);
        return;
    }
    console.log(result); 
});

console.log("2"); // This will execute before file reading is complete

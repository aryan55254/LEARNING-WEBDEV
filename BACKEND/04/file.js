const fs = require("fs");
const result = fs.readFileSync('contacts.txt' , 'utf-8');
console.log(result);
console.log("2");
//blocking req
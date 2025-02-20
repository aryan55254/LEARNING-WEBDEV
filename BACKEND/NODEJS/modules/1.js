//js has 2 main modules system => common js cjs used in node (require module.exports)
//esm used in modern js and prowsers , import/export
//a module system allows js files to be split into smaller reusable pieces
//cjs
//sync loading uses require and module.exports
//only node js not in browser
const math = require("./math"); 
console.log(math.add(2, 3));       
console.log(math.multiply(2, 3));  

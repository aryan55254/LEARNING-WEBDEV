const path = require("path");
console.log(__dirname);
console.log(__dirname + "/../../index.js" + "/projects");
console.log(path.join("C:\Users\aloom\Downloads\LEARNING-WEBDEV\BACKEND\WEEK01","../../index.js","/projects"))
//major.minor.patch in dependencies major change when big change minor when small staff patch when just little bit 
// ^ is for maintaining installations when install again it will maintain latest version 
// dont use ^ if u want the specific version 
// problem that can arise is that different devs will get diff code this is why lock file is there 
//process.argv for getting paths 
const fs = require('fs');
const {program} = require('commander');
program 
 .name('counter')
 .description('cli to do file based tasks')
 .version('0.8.0');
 program.command('count_letter')
  .description('count the no. of lines in a file')
  .argument('<file>','file to count')
  .action((file) => {
    fs.readFile(file,'utf-8',(err,data) => {
        if (err){
            console.log(err);
        }
        else {
            const lines = data.split('\n').length;
            console.log(`there are ${lines} lines in ${file}`);
        }
    });
  });
  program.parse();
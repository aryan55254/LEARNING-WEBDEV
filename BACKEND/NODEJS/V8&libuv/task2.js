//function heavyComputation() {
//    let sum = 0;
//    for (let i = 0; i < 1e9; i++) sum += i;
//    return sum;
//  }
//  
//  console.log("Start");
//  console.log("Heavy Computation:", heavyComputation());  // ❌ Blocks everything!
//  console.log("End");
const { Worker } = require("worker_threads");
console.log("start");
 const worker = new Worker(`
   const { parentPort } = require("worker_threads");
   let sum = 0;
   for (let i = 0; i < 1e9; i++) sum += i;
   parentPort.postMessage(sum);
 `, { eval: true });
 
 worker.on("message", (sum) => {
   console.log("heavy compilation" , sum );
 });
 console.log("end");
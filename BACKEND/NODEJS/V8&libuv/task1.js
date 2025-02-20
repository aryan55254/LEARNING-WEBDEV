const fs = require("fs");
const crypto = require("crypto");
const { Worker } = require("worker_threads");

console.log("1: Start");

// Blocking Task (Synchronous)
for (let i = 0; i < 1e8; i++) {}  
console.log("2: Blocking Loop Done");

// Non-Blocking Task (Async I/O)
fs.readFile("example.txt", "utf8", () => {
  console.log("3: File Read Done");
});

// Microtask (Promise)
Promise.resolve().then(() => console.log("4: Promise Resolved"));

// CPU-Intensive Task (Worker Thread)
const worker = new Worker(`
  const { parentPort } = require("worker_threads");
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;
  parentPort.postMessage(sum);
`, { eval: true });

worker.on("message", () => {
  console.log("5: Worker Thread Done");
});

// Timer (Macrotask)
setTimeout(() => console.log("6: setTimeout Done"), 0);

console.log("7: End");
//"1: Start" → (Sync, V8 Main Thread)
// "2: Blocking Loop Done" → (Sync, Blocks Event Loop)
// "7: End" → (Sync, Main Thread Continues)
// "4: Promise Resolved" → (Microtask, Runs Immediately After Sync Code)
// "6: setTimeout Done" → (Macrotask, Event Loop Runs It After All Microtasks)
// "3: File Read Done" → (Async I/O, Runs Once libuv Completes It)
// "5: Worker Thread Done" → (Worker Thread, Runs Separately and Finishes Last)
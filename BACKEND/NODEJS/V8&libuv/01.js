//node js = js runtive environent allows js to used outside browsers 
//high performance is achieved using google v8 engine for js execution and libuv for async i/o operations 
//v8 = open source search engine by chrome , job is to take js code and turn to machine code 
//how v8 works 
//js code is first converted to abstract syntax tree (ast) which is a way to represent code in a tree format and refers to its logical hiercachical representation without uneccesary syntax details 
//then this is executed by interpreter called ignition which generates byte code 
// it is then optimized to efficient machine code by a JIT compiler called turbofan 
//v8 has adv garbage collector to manage memory more effieiciently
//libuv
//its a c library that node js uses to handle aync i/0 operation
//it provides event loop  that is core mechanism taht allows node js to be non blocking 
// thread pool a pool of worker threads for executing heady operations like system tasks 
// async i/o = non blocking api for file reading , network req etc .
//how libuv works 
//js code runs on main thread 
//blocking operations are send to libuv task like reading file or network calls are offloaded 
//event loop , checks for copleted operations and executes callbacks 
//once operation completed callback func is executed
//blocking = sync 
//non blocking = aync  
//v8 engine in single threaded 
//default size is 4 threads it depends on cpu cores 
//wroker threads => work in separate pool for cpu intensive tasks 
//so event loop is provide by libuv it runs on the main thread and decides whether the task should be done by v8 or should be done by thread pool or workers pool
//a task comes to event loop if it is blockig then it is executed on the v8 main thread and blocks the event loop for any incoming taks , if the task is non blocking event loop sends it to to one of the threads of the libuv thread pool and more tasks can continue to come at event loop meanwhile this runs in bg and if the task is very cpu extensive then u have option to create a separate worker thread that runs in the bg but doesn't block the event loop 
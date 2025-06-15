
/*
Key Takeaways from These Examples

***************IMP************
1. sync operation (console.log) ->
    Process.nextTick -> 
    micro (e.g. promises ) -> 
    macro(e.g. setTimeout)

***************************************

Synchronous code runs first before any async tasks.

Microtasks (Promise.then) run before macrotasks (setTimeout).

setTimeout(…, 0) executes after the current execution cycle.

Node.js: setImmediate(…) may execute before setTimeout(…, 0).

Nested setTimeout(…) executes in the next event loop cycle.



*/

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

//
setTimeout(() => console.log("Timeout 1"), 100);
setTimeout(() => console.log("Timeout 2"), 50);

console.log("Log 1");

setTimeout(() => console.log("Timeout 3"), 0);

console.log("Log 2");

////////////////////////////////////
const fs = require("fs");

fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout"), 0);
    setImmediate(() => console.log("Immediate"));
});

console.log("Start");

///////////////////////////////////////////////

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

////////////////////////////////////////////////////

setTimeout(() => {
    console.log("First Timeout");
    
    setTimeout(() => {
        console.log("Nested Timeout");
    }, 0);
}, 0);

console.log("Script End");

/////////////////////

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

(async () => {
    console.log("Async Start");
    await Promise.resolve();
    console.log("Async End");
})();

console.log("End");

///////////////////////
console.log("A");

process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => console.log("Promise"));

setTimeout(() => console.log("setTimeout"), 0);

console.log("B");

/////////////////////////////////

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("setTimeout"), 0);

console.log("Synchronous");

///////////////////////////////////////////////

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
    Promise.resolve().then(() => console.log("Promise in Timeout 1"));
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
    setTimeout(() => console.log("Timeout in Promise 1"), 0);
});

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");




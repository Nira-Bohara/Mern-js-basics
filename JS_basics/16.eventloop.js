//! event loop
// js engine

//* call stack
//* task queue / callback queue  => microtask queue , macrotask queue
//* event loop

//? web apis => timers , fetch ,location, storage
//? libUv

// const add = (a, b) => {
//   console.log(a + b); //15
//   const b = () => {
//     console.log("b"); //b
//   };
//   b();
// };

// add(12, 3); //
// add(12, 3); //
// console.log(12);

console.log("start");
setTimeout(() => {
  console.log("set time out");
}, 2000);
console.log("end");

// promise
// then ,catch

// fetch("")
//   .then(() => {})
//   .catch(() => {});

//! nodejs event loop phases

//* 1. timers  => setTimeout , setInterval
//* 2. pending callbacks => tcp err, dns err callbacks
//* 3. idle/prepare phase => node internal
//* 4. poll phase => filesystem , incoming i/o, req, res
//* 5. check phase => setImmediate
//* 6. close callbacks => closing callbacks

// setTimeout(()=>{},0) , setimmediate(()=>{})

console.log("1");
setTimeout(() => {
  console.log("timer");
}, 2000);
Promise.resolve().then(() => {
  console.log("3");
  setTimeout(() => {
    console.log(4);
  }, 1000);
});

process.nextTick(() => {
  console.log("next");
});

console.log("2");
 
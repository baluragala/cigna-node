// 3states
// 1. pending
// 2. resolved
// 3. rejected

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => reject("done"), 2000);
// });

// // p.then(function(data) {
// //   console.log(data);
// // }).catch(function(err) {
// //   console.log("error", err);
// // });

function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(1);
      console.log(2);
      console.log(3);
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(4);
      console.log(5);
      reject("failed");
      console.log(6);
    }, 2000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(7);
      console.log(8);
      console.log(9);
      resolve();
    }, 2000);
  });
}

console.log("start");

// step1()
//   .then(() => step2())
//   .then(() => step3());

step1()
  .then(() => step2())
  .then(() => step3())
  .catch(reason => console.log("next step rejected because %s", reason));

//bluebird
//  node --inspect-brk async.js

//  chrome://inspect

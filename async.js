function step1(next) {
  setTimeout(function() {
    console.log(1);
    console.log(2);
    console.log(3);
    next(step3);
  }, 1000);
}

function step2(next) {
  setTimeout(function() {
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    next();
  }, 500);
}

function step3() {
  setTimeout(function() {
    console.log(8);
    console.log(9);
    console.log(10);
    console.log("end");
  }, 100);
}

console.log("start");
step1(step2);

//  node --inspect-brk async.js

//  chrome://inspect

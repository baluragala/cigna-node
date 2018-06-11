function step1() {
  setTimeout(function() {
    console.log(1);
    console.log(2);
    console.log(3);
    step2();
  }, 1000);
}

function step2() {
  setTimeout(function() {
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    step3();
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
step1();

//  node --inspect-brk async.js

//  chrome://inspect

const EventEmitter = require("events").EventEmitter;
const ee = new EventEmitter();

const EVENTS = {
  END_OF_STEP1: "END_OF_STEP1",
  END_OF_STEP2: "END_OF_STEP2",
  END_OF_STEP3: "END_OF_STEP3"
};

function step1() {
  setTimeout(function() {
    console.log(1);
    console.log(2);
    console.log(3);
    ee.emit(EVENTS.END_OF_STEP1);
  }, 1000);
}

function step2() {
  setTimeout(function() {
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    ee.emit(EVENTS.END_OF_STEP2);
  }, 500);
}

function step3() {
  setTimeout(function() {
    console.log(8);
    console.log(9);
    console.log(10);
    console.log("end");
    ee.emit(EVENTS.END_OF_STEP3);
  }, 100);
}

ee.on(EVENTS.END_OF_STEP1, step2);
ee.on(EVENTS.END_OF_STEP2, step3);
console.log("start");
step1();

//  node --inspect-brk async.js
//  chrome://inspect

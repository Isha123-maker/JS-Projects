//Synchronous callbacks
let inner = function () {
  console.log("inner 1"); //3
};
let outer = function (callback) {
  console.log("outer 1"); //2
  callback(); //3
  console.log("outer 2");
};
console.log("test 1"); //1
outer(inner);
console.log("test 2"); //4

//Asynchronous callbacks
let inner1 = function () {
  console.log("inner 1"); //5 with delay of one second
};
let outer1 = function (callback) {
  console.log("outer 1"); //2
  setTimeout(callback, 1000) /*ms*/;
  console.log("outer 2"); //3
};
console.log("test 1"); //1
outer(inner1);
console.log("test 2"); //4

//setInterval and setTimeout functions

let inner2 = function () {
  console.log("inner 1");
};
let outer2 = function (callback) {
  console.log("outer 1");
  let timerId = setInterval(callback, 1000); /*ms*/
  console.log("outer 2");
  setTimeout(function () {
    clearInterval(timerId);
  }, 5500);
};
console.log("test 1");
outer(inner2);
console.log("test 2");

//appear message when you click
window.addEventListener("click", function () {
  console.log("clicked!");
});

//arrow function
let add = (a, b) => {
  return a + b;
};
console.log(add(10, 20)); // -> 30

//forEach method
let names = ["Alice", "Eve", "John"];
function showName(element) {
  console.log(element);
}
names.forEach(showName); // -> Alice, Eve, John

//try..catch method for exception handling
try {
  console.log("abc"); // -> abc
  conole.log("abc");
} catch (error) {
  console.log(error.message); // -> conole is not defined
}

//try..finally method
let a = 10;
try {
  a = b; // ReferenceError
} catch (error) {
  console.log("An Error!"); // -> An Error!
} finally {
  console.log("Finally!"); // -> Finally!
}
console.log(a); // -> 10

//console.time and console.timeEnd function for time measurement
let part = 0;
console.time("Leibniz");
for (let k = 0; k < 10000000; k++) {
  part = part + (-1) ** k / (2 * k + 1);
}
console.timeEnd("Leibniz"); // -> Leibniz: 456.60498046875 ms
let pi = part * 4;
console.log(pi); // -> 3.1415925535897915

//change to check time difference

let part1 = 0;
console.time("Leibniz");
for (let k = 0; k < 10000000; k++) {
  part1 = part1 + (k % 2 ? -1 : 1) / (2 * k + 1);
}
console.timeEnd("Leibniz"); // -> Leibniz: 175.5458984375 ms
let pi1 = part1 * 4;
console.log(pi1);

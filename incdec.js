let n1 = 10;
let n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19
//logical operator

const a = false;
const b = true;
const c = false;
const d = true;

console.log((a && b && c) || d); // -> true
console.log(a && b && (c || d)); // -> false

//logical compound asignmnt operator

let e = true;
console.log(e); // -> true
e &&= false;
console.log(e); // -> false

//comparision operator

console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

//not equalto operator

console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 != false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true

//comparision on strings

console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true

console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true

console.log("ab" < "ab4"); // -> true

//ternary operator

console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

// nested if else

let number = prompt("Enter a number", 0);

if (number < 10) {
  alert("<10");
} else if (number < 30) {
  alert("<30");
} else if (number < 60) {
  alert("<60");
} else if (number < 90) {
  alert("<90");
} else if (number < 100) {
  alert("<100");
} else if (number == 100) {
  alert("100");
} else {
  alert(">100");
}

//if else and logical condition

const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calculate shipping cost*/
if (
  userAge > 65 ||
  (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))
) {
  shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
  shippingCost = shippingCost - 5;
} else if (userAge < 21) {
  isOrderValid = false;
}

/** take account of insurance */
if (isOrderValid && addInsurance && !hasPromoCode) {
  shippingCost += INSURANCE_COST;
}

/** show message */
if (isOrderValid) {
  console.log(shippingCost);
} else {
  console.log("Cannot order if under 21");
}

//switch statement

let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
  case "a":
    alert("Gate A: empty");
    break;
  case "b":
    alert("Gate B: main prize");
    win = true;
    break;
  case "c":
    alert("Gate C: empty");
    break;
  default:
    alert("No gate " + String(gate));
}

if (win) {
  alert("Winner!");
}

//for loop

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}
console.log(sum); // -> 190

//array using loops

let names = [];
let isOver = false;
while (!isOver) {
  let name = prompt("Enter another name or press cancel.");
  if (name != null) {
    names.push(name);
  } else {
    isOver = true;
  }
}

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//for of loop

let cities = [
  { name: "New York", population: 18.65e6 },
  { name: "Cairo", population: 18.82e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "São Paulo", population: 20.88e6 },
  { name: "Mexico City", population: 21.34e6 },
  { name: "Shanghai", population: 23.48e6 },
  { name: "Delhi", population: 25.87e6 },
  { name: "Tokyo", population: 37.26e6 },
];

for (let city of cities) {
  if (city.population > 20e6) {
    console.log(`${city.name} (${city.population})`);
  }
}

//function in js

let temperatures;
let meanTemp;
function getMeanTemp() {
  let sum = 0;
  let result;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  result = sum / temperatures.length;
  return result;
}
temperatures = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);
temperatures = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);

//shafowing of functions

let A = 100,
  B = 200,
  C = 300;
function test(a) {
  let b = 10;
  console.log(A); // parameter a
  console.log(B); // local variable b
  console.log(C); // global variable c
}
test(1); // -> 1
// -> 10
// -> 300
console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300

//assigning function to variable

function doNothing() {
  return undefined;
}
let g = doNothing(); // assign result of function call
let h = doNothing; // assign a function
console.log(typeof g); // -> undefined
console.log(typeof h); // -> function
// more precisely, a reference to the function is stored in the h variable.

//anonymous function

function operation(func, first, second) {
  return func(first, second);
}
let myAdd = function (a, b) {
  return a + b;
};
console.log(operation(myAdd, 10, 20)); // -> 30
console.log(
  operation(
    function (a, b) {
      return a * b;
    },
    10,
    20
  )
); // -> 200

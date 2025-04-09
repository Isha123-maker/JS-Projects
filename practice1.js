//initialization of variables using literals and constructor functions

let b1 = true;
let b2 = Boolean(false);

let n1 = 100;
let n2 = Number(200);

let bi1 = 300n;
let bi2 = BigInt(500n);

let s1 = "hello";
let s2 = String("isha");

let u1 = undefined;

console.log(b1);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(u1);

//conversion examples
let b = Boolean(BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

//second way to convert

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let boo = Boolean(bi);

console.log(`${boo} [${typeof boo}]`);

//Adding all primitive values

let string = "isha" + "Noor";
let number = 12 + 34;
let bigint = 100n + 200n;
let undf = undefined + undefined;
let boolean = true + false;

console.log(`${string} [${typeof string}]`);
console.log(`${number} [${typeof number}]`);
console.log(`${bigint} [${typeof bigint}]`);
console.log(`${undf} [${typeof undf}]`);
console.log(`${boolean} [${typeof boolean}]`);

//error given if num added to bigint and bool added to bigint

const str1 = 42 + "1";
console.log(str1);

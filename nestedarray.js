//nested array
let names = [
  ["Olivia", "Emma", "Mia", "Sofia"],
  ["William", "James", "Daniel"],
];

//output for nested array
console.log(names[0]); //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]); //  ->  Emma
console.log(names[1][1]); //  ->  James

let femaleNames = names[0];
console.log(femaleNames[0]); //  ->  Olivia
console.log(femaleNames[2]); //  ->  Mia

//objects inside array

let users = [
  {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us",
  },
  {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com",
  },
];

//output for objects inside array

console.log(users[0].name); //  ->  Calvin
console.log(users[1].age); //  ->  21

//adding data of other user at index 2
users[2] = {
  name: "Irene",
  surname: "Purnell",
  age: 32,
  email: "IreneHPurnell@rhyta.com",
};

//output for above part added

console.log(users[0].name); //  ->  Calvin
console.log(users[1].name); //  ->  Mateus
console.log(users[2].name); //  ->  Irene

//datatype of array
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); //  ->  object
console.log(typeof day); //  ->  string

//instanceof operator
console.log(days instanceof Array); //  ->  true
console.log(day instanceof Array); //  ->  false

//length method for array

let names2 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names2.length); //  ->  4

names2[5] = "Amelia";
console.log(names2.length); //  ->  6

console.log(names2); //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel",  undefined,  "Amelia"]

console.log(names2[3]); //  ->  Samuel
console.log(names2[4]); //  ->  undefined
console.log(names2[5]); //  ->  Amelia

//index operator

let names3 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names3.indexOf("Mateo")); //  ->  2
console.log(names3.indexOf("Victor")); //  ->  -1

//push method adds element at end of array increase size by 1

let names4 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names4.length); //  ->  4

names4.push("Amelia");
console.log(names4.length); //  ->  5
console.log(names4); //  -  >  ["Olivia",  "Emma",  "Mateo",  "Samuel",  "Amelia"]

//unshift method adds element at begining of array shift all other elements to right and its is always 0

let names5 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names5.indexOf("Mateo")); //  ->  2
console.log(names5.indexOf("Victor")); //  ->  -1

//pop method pop element from end
let names6 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names6.length); //  ->  4

let index = names6.pop();
console.log(names6.length); //  ->  3
console.log(index); //  ->  Samuel
console.log(names6); //  ->  ["Olivia",  "Emma",  "Mateo"]

//shift method shift method from begening

let names7 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names7.length); //  ->  4

let first = names7.shift();
console.log(names7.length); //  ->  3
console.log(first); //  ->  Olivia
console.log(names7); //  ->  ["Emma",  "Mateo",  "Samuel"]

//reverse method reverse arraay

let names8 = ["Olivia", "Emma", "Mateo", "Samuel"];

names8.reverse();
console.log(names8); //  ->  ["Samuel",  "Mateo",  "Emma","Olivia"]

//slice method
let names9 = ["Olivia", "Emma", "Mateo", "Samuel"];

let n1 = names9.slice(2);
console.log(n1); //  ->  ["Mateo",  "Samuel"]

let n2 = names9.slice(1, 3);
console.log(n2); //  ->  ["Emma",  "Mateo"]

let n3 = names9.slice(0, -1);
console.log(n3); //  ->  ["Olivia",  "Emma",  "Mateo"]

let n4 = names9.slice(-1);
console.log(n4); //  ->  ["Samuel"]

console.log(names9); //  ->  ["Olivia",  "Emma",  "Mateo","Samuel"]

//concat method

let names10 = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names10.concat(otherNames);

console.log(names10); //  ->  ["Olivia",  "Emma",  "Mateo","Samuel"]
console.log(otherNames); //  ->  ["William",  "Jane"]
console.log(allNames); //  ->  ["Olivia",  "Emma",  "Mateo","Samuel",  "William",  "Jane"]

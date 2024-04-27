//Ways to declare a variable
//'var', 'let', 'const'

let firstName = 'Ryan';
const lastName = 'Azur';
let age = 30;
var color = 'blue';

console.log(age);

//Naming conventions
//Only letters, numbers, underscores and dollar sign
//can't start with a number

//Multi-Word Formatting
//firstName - camelCasing
//first_name - underscore
//FirstName - PascalCase
//firstname - lowercase

//we can reassign let variables. If you change age to use const, you will get an error
age = 31;
console.log(age);

//with let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

//we cannot re-assign a const variable
const x = 100;
// x = 200;
//this will result in an error

//we can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
console.log(arr);
arr.push(5);
console.log(arr);

const person = {
  name: 'Ryan',
};

person.name = 'Alden';
person.email = 'alden@gmail.com';
console.log(person);

//declare multiple values at once
let a,
  b,
  c,
  d = 10;

const g = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);

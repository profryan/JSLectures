//Normal function declaration
// function add(a, b) {
//   return a + b;
// }

//Arrow function Syntax
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

//Implicit Return
const subtract = (a, b) => a - b;
console.log(subtract(10, 2));

const double = (a) => a * 2;
console.log(double(2));

//Return an object
const createObj = () => ({
  name: ' Ryan',
});
console.log(createObj());

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

//arrow function in a callback
numbers.forEach((n) => console.log(n));

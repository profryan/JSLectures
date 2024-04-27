//String
const firstName = 'Alden';

//Number
const age = 30;
const temp = 18.75;

//Boolean
const hasKids = true;

//Null
const aptNumber = null;

//undefined
let score = undefined;

//symbol
const id = Symbol('id');

//BigInt
const n = 9223372036854775807n;

//Reference Types
const numbers = [1, 2, 3, 4];

const person = {
  name: 'Ryan',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

//Nesting arrays
//nest berries inside of fruits
// fruits.push(berries);

//if we want to access 'blueberry', do the ff:
// x = fruits[3][1];

//create a new variable and nest both arrays
const allFruits = [fruits, berries];

//concat() - concatenate arrays
// x = fruits.concat(berries);

//spread operator (...) - concatenate with
x = [...fruits, ...berries];

//flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

//Static methods of Array object

//isArray() - check if it is an array
x = Array.isArray(fruits);

//from() - create an array from an array like value
x = Array.from('12345');

//of() - create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
// x = arr;
console.log(x);

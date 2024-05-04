//If statement Syntax
//Truthy

if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is NOT True');
}

//Evaluate expressions
const x = '5';
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

// Block Scope
if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

// console.log(z);

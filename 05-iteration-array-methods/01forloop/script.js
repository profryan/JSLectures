// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   console.log(' Number ' + i);
//   if (i === 7) {
//     console.log('7 is my lucky Number');
//   }
// }

//Nested Loops
// for (let i = 0; i <= 5; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//Loop through an array
const names = ['Ryan', 'Joanne', 'Alden', 'Jolina', 'Erik'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'Jolina') {
    console.log(names[i] + ' at Marvin Soliddd!');
  } else {
    console.log(names[i]);
  }
}

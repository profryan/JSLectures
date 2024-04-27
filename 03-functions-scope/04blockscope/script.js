const x = 100;
//An if statement is a block

if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); //referenceError, y is not defined

// a loop is a block

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// console.log(i); //ReferenceError: i is not defined

//using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);

//var is function scoped
function run() {
  var d = 100;
  console.log(d);
}

run();
// console.log(d);

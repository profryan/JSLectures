// alert('Hello');
// console.log(innerWidth);

//Global scope variable

let x = 100;
console.log(x, 'in global');

function run() {
  //Access global vars in functions
  console.log(window.innerWidth);
  console.log(x, 'in function');
}

run();

//Access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  //overwrite global x (variable shadowing)
  x = 1;
  const y = 50;
  console.log(x + y);
}

//cannot access a function scoped variable in global scope
console.log(y);
add();

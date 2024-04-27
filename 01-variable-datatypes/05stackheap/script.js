//Value is stored in the stack
const name = 'Ryan';
const age = 19;

//Reference is stored in the heap
const person = {
  name: 'Alden',
  age: 10,
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Rico';

console.log(name, newName);
console.log(person, newPerson); // {name: 'Alden'}, age:10, {name: 'Rico}, age:10 }

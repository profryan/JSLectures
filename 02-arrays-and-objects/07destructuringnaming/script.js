//setting object properties with the same name as the variable

const firstName = 'Maria';
const lastName = 'Clara';
const age = 18;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

//destructure object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'Juan',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

//destructure arrays using the rest/spread operator

const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

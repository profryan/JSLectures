let x;

//Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

//Object Nesting
const person = {
  address: {
    coords: {
      lat: 14.5972018,
      lng: 120.9792419,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//spread operator
const obj3 = { ...obj1, ...obj2 };
//same as using...
const obj4 = Object.assign({}, obj1, obj2);

//Array of objects
const todos = [
  { id: 1, name: 'Prepare coffee' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Prepare lunch' },
];

x = todos[1].name;

//Get array of object keys
x = Object.keys(todo);

//get length of an object
x = Object.keys(todo).length;

//get array of object values
x = Object.values(todo);

//get array of object key/value pairs
x = Object.entries(todo);

//check if object has a property
x = todo.hasOwnProperty('name');
// x = obj4;
console.log(x);

let x;

//Create an object
const person = {
  name: 'Juan Dela Cruz',
  age: 19,
  isAdmin: true,
  address: {
    street: '143 Paghanapin St.',
    city: 'Manila',
    region: 'NCR',
  },
  hobbies: ['music', 'sports'],
};

//Accessing object properties
x = person.name; //dot notation
x = person['age']; //bracket notation
x = person.address.city;
x = person.hobbies[0];

//updating properties
person.name = 'Maria Clara';
person['isAdmin'] = false;

//deleting properties
delete person.age;

//creating a new properties
person.hasChildren = true;

//Add functions

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

//Keys with multiple words
const person2 = {
  'first name': 'Ryan',
  'last name': 'Pogi',
};

x = person2['first name'];
console.log(x);

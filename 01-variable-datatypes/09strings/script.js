let x;

const name = 'Ryan';
const age = 31;

//Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

//template litels
x = `Hello, my name is ${name} and I am ${age} years old`;

//String Properties and Methods
//create a string object (JS does this automatically when using a property or method on a primitive string)

const s = new String('Hello World');

x = typeof s;

x = s.length;

//access value by key
x = s[6];

//show the prototype of the string object. SHows the properties and methods
x = s.__proto__;

//change case
x = s.toUpperCase();
x = s.toLowerCase();

//charAt() - returns the character at the specified index
x = x.charAt(6);

//indexof - returns the index of the first occurence of a specified value in a string

x = s.indexOf('d');

//substring() - search a string for a specified value
x = s.substring(2, 5);
x = s.substring(7);

//slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);

//trim() - remove whitespave from beginning and end of a string
x = '         Hello    World';
x = x.trim();

//replace() - replace all instances of a string
x = s.replace('World', 'Ryan');

//includes() - returns true if the string is found
x = s.includes('Hell');

//valueof() - returns the primitive value of a variable
x = s.valueOf();

//split() - returns an array of string
x = s.split('');

console.log(x);

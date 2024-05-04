// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = function () {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

//Truthy and falsy caveats
const children = 0;

if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

//Checking for empty arrays
const posts = [];

//Always true even when empty
if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts to list');
}

//Solution
if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts to list');
}

//checking for empty objects
const user = {
  name: 'Ryan',
};

//Always true, even when no properties
if (user) {
  console.log('List user');
} else {
  console.log('No User');
}

//Solution
if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No User');
}

//Loose Equality
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

//Strict Equality
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);

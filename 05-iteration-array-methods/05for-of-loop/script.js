//Loop through arrays
const items = ['book', 'table', 'chair', 'coffee'];
const users = [{ name: 'Ryan' }, { name: 'Pau' }, { name: 'Alden' }];

// for (const item of items) {
//   console.log(item);
// }

// for (const user of users) {
//   console.log(user.name);
// }

//LOOP OVER STRINGS
const str = 'Hello World';

// for (const letter of str) {
//   console.log(letter);
// }

//Loop over Maps
const map = new Map();
map.set('name', 'Ryan');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}

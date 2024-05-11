const socials = ['Twitter', 'Linkedin', 'Facebook', 'Instagram'];

//View prototype chain
// console.log(socials.__proto__);

//Long form
// socials.forEach(function (item) {
//   console.log(item);
// });

// //Short form
// socials.forEach((item) => console.log(item));

// //pass in the index and original array
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

//using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

//Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.name));
socialObjs.forEach((item) => console.log(item.url));

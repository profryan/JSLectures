//Loop through objects
const colorObj = {
  color1: 'red',
  color2: 'green',
  color3: 'blue',
  color4: 'yellow',
  color5: 'pink',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

//Loop through arrays
const colorArr = ['red', 'green', 'blue', 'yellow', 'pink'];

for (const key in colorArr) {
  console.log(colorArr[key]);
}

let i = 30;

// while (i <= 20) {
//   console.log('Number ' + i);
//   i++;
// }

//Loop over arrays
const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

//nesting while loops
while (i <= 5) {
  console.log('Number ' + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

//do while loop
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);

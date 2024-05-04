const d = new Date(5, 4, 2024, 6, 50, 12);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good morning');
} else if (hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good night');
}

//Nested if
if (hour < 12) {
  console.log('Good morning');
  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good night');
  if (hour >= 22) {
    console.log('ZzZzzzzZ');
  }
}

if (hour >= 7 && hour < 12) {
  console.log('It is integrative programming time');
}

if (hour === 6 || hour === 22) {
  console.log('Brush your teeth');
}

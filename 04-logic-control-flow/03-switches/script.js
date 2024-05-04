const d = new Date(2024, 0, 10, 20, 50, 12);
const month = d.getMonth();
const hour = d.getHours();

//Immediate value evaluation
// console.log(month);
// console.log(d);
switch (month) {
  case 0:
    console.log('It is January');
    break;

  case 1:
    console.log('It is February');
    break;

  case 2:
    console.log('It is March');
    break;

  default:
    console.log('It is not Jan, feb or march');
    break;
}

switch (true) {
  case hour < 12:
    console.log('Good morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;

  default:
    console.log('Good night');
    break;
}

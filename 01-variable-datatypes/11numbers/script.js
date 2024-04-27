let x;

const num = new Number(5);

//toString() - returns a string representation of the number
x = num.toString();

//to get the length
(x = num), toString().length;

//tofixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

//toPrecision() - returns a number with the specified length
x = num.toPrecision(4);

//toExponential() - convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

//tolocalestring() - returns a string representation of the number using the current locale
x = num.toLocaleString('en-US');

//valueof - get Value
x = num.valueOf();

console.log(x);

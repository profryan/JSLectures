//Log number
console.log(100);

//log string
console.log('Hello World');

//log multiple values
console.log(20, 'Hello', true);

//log a variable
const x = 100;
console.log(x);
//console error & warning
console.error('Alert');
console.warn('Warning');

//Log object as table
console.table({ name: 'Ryan', email: 'ryan@gmail.com' });

//Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

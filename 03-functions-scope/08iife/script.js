//IFFE Syntax (Has its own own scope and runs right away)

(function () {
  const user = 'Ryan';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

//Params
(function (name) {
  console.log('Hello ' + name);
})('Pat');

//Named IIFE (can only be called recursively)
(function hello() {
  console.log('Hello');
})();

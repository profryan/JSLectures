//Function Declaration
//When using declarations, you can invoke the function before the declaration. With expressions, you cannot.

function addDollarSign(value) {
  return '$ ' + value;
}
console.log(addDollarSign(200));

//Function Expression

const addPlusSign = function (value) {
  return '+ ' + value;
};
console.log(addPlusSign(200));

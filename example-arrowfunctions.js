// var names = ['Josh', 'Rebecca', 'Matt', 'Jared'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {console.log('arrowFunc', name);});
//
// names.forEach((name) => console.log('arrowSingle', name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Josh'));

// var person = {
//   name: 'Josh',
//   greet: function(){
//     names.forEach((name) => console.log(this.name, 'says hi to', name));
//   }
// };
// person.greet();

function add(a, b){
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3), add(9, 0));
console.log(addStatement(1, 3), addStatement(9, 0));
console.log(addExpression(1, 3), addExpression(9, 0));

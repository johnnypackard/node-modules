// Require in path starts with a . so that 
// Node knows not to look in node_modules.
const addFunction = require('./addinator');
const array = require('./array');

let sum = addFunction(array);
console.log('The sum is', sum);

// Write a program that takes a single line of input, representing an arithmetic expression.  The expression will consist of numeric digits (0-9), the plus operator (+) and the multiplication operator (*).  The given expression will be a valid arithmetic expression (ie. "*2++" is not valid).
// Your task is to evaluate the arithmetic expression, following the normal rules of operator precedence, and print the result without any leading or trailing whitespace.
// The resulting numbers will fit in a normal integer.
// Note: Solutions such as "eval()" in python are elegant, but not what we are looking for here.  Please evaluate the expressions with your own code :).

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  //do your processing here.
  let result = 0;
  let curr = input.split('+');
  
  
  for(let i = 0; i < curr.length; i++) {
    if(curr[i].includes('*')) {
      let multiply = curr[i].split('*').map((num) => parseInt(num));
      var product = multiply.reduce((total, val) => total * val);
      curr[i] = product;
    }
  }
  
  curr = curr.map((num) => parseInt(num)).reduce((total, val) => total + val);
  
  console.log(curr);
});

var fs = require('fs');
mybuff = fs.readFileSync(process.argv[2]);
var str = mybuff.toString();
var arr = str.split('\n');

//Note that the test file does not have a newline 
//character ('\n') at the end of the last line, 
//so using this method you'll end up with an array 
//that has one more element than the number of newlines
console.log((arr.length - 1));


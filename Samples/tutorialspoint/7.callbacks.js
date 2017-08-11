var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Started");


fs.readFile('input.txt', CbreadFile);

function CbreadFile(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
}

console.log("Program Ended");
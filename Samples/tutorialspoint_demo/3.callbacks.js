var callbacks = module.exports ={};

var fs = require("fs");

callbacks.readFileData = function(){

console.log("Inside Call back Module");

var output = "\nRedaing File in Sync First \n";    

var data = fs.readFileSync('input.txt');

output += data.toString()+ "\n";
output += "Program Ended";
output += "\nNow Reading File with Callbacks \n";


fs.readFile('input.txt', function(err, data) {
    if (err){

        console.error(err);
        output += err.toString()+"\n";
    } 
    console.log(data.toString());
    output += data.toString()+ "\n";
});

console.log("Program Ended");
output += "Program Ended";

return output;
};

var globalObjects = module.exports={};

globalObjects.getGlobalObjects = function(){

    var output = '';

output = 'Let\'s try to print the value of __filename: ';
output +=__filename+'\n';

output += "Let\'s try to print the value of __dirname: ";
output +=__dirname+'\n';

//setTimeout(cb, ms)
function printHello() {
    output += "Inside printHello()\n";
    output +="Hello, World!\n";
    console.log("Inside printHello()\n");
}

output += '\"setTimeout(printHello, 2000); \"is used to run callback printHello after at least 2000 milliseconds\n';
// Now call above function after 2 seconds
setTimeout(printHello, 2000);

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

output += '\"clearTimeout(t); \"is used to stop a timer that was previously created with setTimeout()\n';
// Now clear the timer
clearTimeout(t);

output += '\"setInterval(printHello, 2000);\"is used to run callback printHello repeatedly after at least 2000 milliseconds\n';
// Now call above function after 2 seconds
setInterval(printHello, 2000);

return output;
};

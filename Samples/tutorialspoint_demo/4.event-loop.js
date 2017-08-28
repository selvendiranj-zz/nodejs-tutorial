// Import events module
var events = require('events');

var eventLoops = module.exports = {};

eventLoops.getEventLoops = function(){
    console.log("Inside Event Loop Module");
var output = '';

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
     output = 'connection successful.\n';

    // Fire the data_received event 
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
    output += 'data received successfully.\n';
});

// Fire the connection event 
eventEmitter.emit('connection');

output += "Program Ended.\n";


//##### How Node Applications Work?

var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(err.stack);
        output += err.toString()+"\n";
       
    }
    output += data.toString()+"\n";
    console.log(data.toString());
});
output += "Program Ended \n";
console.log("Program Ended");
 
return output;

};

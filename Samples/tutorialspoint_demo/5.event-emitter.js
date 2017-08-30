var eventEmitterEx = module.exports = {};

var events = require('events');
var eventEmitter = new events.EventEmitter();
var output = '';

eventEmitterEx.getEventEmitter = function() {

    console.log("Inside Event Emitter Module");

    // listener #1
    var listner1 = function listner1() {
        output += 'listner1 executed.\n';
    }

    // listener #2
    var listner2 = function listner2() {
        output += 'listner2 executed.\n';
    }

    // Bind the connection event with the listner1 function
    eventEmitter.addListener('connection', listner1);

    // Bind the connection event with the listner2 function
    eventEmitter.on('connection', listner2);

    var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
    output += eventListeners + " Listner(s) listening to connection event\n";

    // Fire the connection event 
    eventEmitter.emit('connection');

    // Remove the binding of listner1 function
    eventEmitter.removeListener('connection', listner1);
    output += "Listner1 will not listen now.\n";

    // Fire the connection event 
    eventEmitter.emit('connection');

    eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
    output += eventListeners + " Listner(s) listening to connection event\n";

    output += "Program Ended.";

    return output;

};
var events = require('events');
var EventEmitter = new events.EventEmitter();

//create event handler 
var myEventHadler = function() {
    console.log("I have create a stream")
}

//Assign event handle to an event
EventEmitter.on('stream',myEventHadler);

//fire an event - emit() method is used to fire an event
EventEmitter.emit('stream')
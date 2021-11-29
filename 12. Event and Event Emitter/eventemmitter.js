var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on("play",function(name){
    console.log(name , "is playing")
})

eventEmitter.emit("play","Shaswata");
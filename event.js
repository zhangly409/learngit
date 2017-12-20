var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter()
event.on('some_event1',function(){
    console.log('some_event 事件触发');
});
setTimeout(function(){
    event.emit('some_event1');
},1000);

var events = require('events');
//创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//创建时间处理程序
var connectHandler = function connected(){
    console.log('连接成功')

    //触发 data_receive事件
    eventEmitter.emit('data_received')
}

//绑定 connection 事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定data_received 事件
eventEmitter.on('data_received',function(){
    console.log('数据接收成功');
})

//触发connection 事件
eventEmitter.emit('connection');


//以下程序中 fs.readFile() 是异步函数用于读取文件，先跳过回调函数的输出，执行console.log
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});

console.log('程序执行完毕');

//下列程序演示EventEmitter类的应用


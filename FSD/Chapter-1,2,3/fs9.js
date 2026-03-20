var eventemitter=require("events");
var ee=new eventemitter();
var fun1=(x)=>{
    console.log(`Message from function-1 is ${x}`)
}
var fun2=(x)=>{
    console.log(`Message from function-2 is ${x}`)
}
ee.on("event1",fun1);
ee.on("event2",fun2);
ee.on("event1",fun2);
ee.on("event2",fun1);
var c=ee.listenerCount("event1");
console.log(`Count is : ${c}`);
ee.emit("event1","B4 Students!!");
ee.emit("event2","FSD2");
ee.removeListener("event1",fun2);
ee.removeAllListeners("event2");
var c1=ee.listenerCount("event2");
console.log(`Count is : ${c1}`);
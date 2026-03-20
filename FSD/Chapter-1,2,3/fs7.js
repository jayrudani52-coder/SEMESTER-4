var eventemitter=require("events");
var ee=new eventemitter();
ee.on("First",()=>{
    console.log("First Task");
})
var add=(a,b)=>{
    console.log(`Addition is ${a+b}`);
}
ee.on("Second",add);
ee.on("Second",()=>{
    console.log("Completed....");
})
ee.on("First",()=>{
    console.log("First task Completed....");
})
ee.emit("First");
ee.emit("Second",3,6);

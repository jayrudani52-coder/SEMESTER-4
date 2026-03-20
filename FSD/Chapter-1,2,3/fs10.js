var eventemitter=require("events");
var ee=new eventemitter();
ee.on("Circle",(x)=>{
    if(x<0){
        console.log("Radius must be Positive");
    }
    else{
        console.log(`Area of circle is : ${3.14*x*x}`);
    }   
})
ee.on("Square",(y)=>{
    if(y<0){
        console.log("length must be Positive");
    }
    else{
        console.log(`Area of square is : ${y*y}`);
    }
})
ee.emit("Circle",10);
ee.emit("Square",9);
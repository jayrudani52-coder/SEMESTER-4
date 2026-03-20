var eventemitter=require("events");
var ee=new eventemitter();
var fs=require("fs");
ee.on("CreateFolder",()=>{
    if(!fs.existsSync("abc")){
        fs.mkdirSync("abc");
    }
    else{
        console.log("Folder already Exists....");
    }
    ee.emit("WriteFile");
})
ee.on("WriteFile",()=>{
    fs.writeFileSync("abc/xyz.txt","Hello Everyone!!");
})
ee.on("AppendFile",()=>{
    fs.appendFileSync("abc/xyz.txt","\nWelcome Guyzzzz");
})
ee.emit("CreateFolder");
ee.emit("AppendFile");

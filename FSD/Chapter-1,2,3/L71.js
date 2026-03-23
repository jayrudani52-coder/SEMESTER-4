// http module
var https=require("http");
https.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"test/html"});
    res.end("<h1>HTTP Module Example</h1>");
    res.write("Hiii");
    //res.end();
}).listen(8080,()=>{
    console.log("Server Started http://localhost:8080");
})
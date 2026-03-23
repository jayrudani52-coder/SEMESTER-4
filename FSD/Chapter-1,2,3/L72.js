var https=require("http");
https.createServer((res,req)=>{
    res.writeHead(200,{"content-Type":"application/json"});
    var d={"Sub":"FSD-2","Faculty":"NAS"};
    res.end(JSON.stringify(d));
}).listen(7001,()=>{
    console.log("Started....")
});
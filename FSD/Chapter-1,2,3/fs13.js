var http=require("http");
var server=http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"application/json"});
    if(req.url==="/api"){
        res.end(JSON.stringify({name:"Rahul",course:"NodeJS",status:"Enrolled"}));
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("404 - Page Not Found");
    }
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
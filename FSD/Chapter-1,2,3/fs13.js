/*    Write a Node.js program using the HTTP module to create a server that sends a JSON response when the user visits the /api route.The JSON object should contain:name as "Rahul", course as "NodeJS",status as "Enrolled"Set the appropriate header for JSON data and display "404 – Page Not Found" for any other route.    */
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

/*   Write node js script to fetch values from url given below and display output as asked.
"https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
    Output:
    Hello!
    Welcome to LJU FSD2 T1 Test
    #AllTheBest
2) Read content from file “exam.txt” and send response to server and display data in “/” page in same 
   format as above but in H1 tag and in red color.
3) If any other page is requested it shows “Page not found” message in plain text.   */

var https=require("http");
var url=require("url");
var fs=require("fs");
var u="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest";
var p=url.parse(u,true);
var data=p.query.c1+"!\n"+p.query.c3+" "+p.query.c2+"\n"+p.hash;
fs.writeFileSync("."+p.pathname,data);

https.createServer((req,res)=>{
    if(req.url==="/"){
        var d=fs.readFileSync("."+p.pathname,"utf-8")
        res.writeHead(200,{"content-type":"text/html"});
        res.end(`<h1 style="color:red"><pre>${d}</pre></h1>`);
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("Page not Found!!");
    }
}).listen(8001);
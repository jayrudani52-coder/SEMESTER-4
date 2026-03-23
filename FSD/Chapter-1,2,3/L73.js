var https=require("http");
var fs=require("fs");
https.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(`<h1>Welcome to LJ University<h1> <img src="/D:\T1_FSD-2_B4_130\download.png" width="300" height="300"`);
        res.end('<a href="/D:\T1_FSD-2_B4_130\download.png">Image</a>');
    }
    else if(req.url==="/D:\T1_FSD-2_B4_130\download.png"){
        const i=fs.readFileSync("D:\T1_FSD-2_B4_130\download.png");
        res.writeHead(200,{"content-type":"image/png"});
        res.end(i);
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end(`<h2>Sorry,Page not Found!!</h2>
                 <a href='https://localhost:8888'>Click Here</a>`);
    }
}).listen(8888);
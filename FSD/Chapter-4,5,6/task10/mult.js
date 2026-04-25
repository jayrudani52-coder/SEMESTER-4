var mult=require("multer");
var express=require("express");
var app=express();
app.use(express.static(__dirname,{index:"mult.html"}));
var store=mult.diskStorage({
    destination:"my",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
        console.log(file);
    }
})
var upload=mult({storage:store})
app.post("/uploadfile",upload.single("mydoc"),(req,res)=>{
    const file=req.file;
    console.log(file);
    if(file){
        res.send(`<h1> File <span style="color:red"> ${file.originalname} </span> has been uploaded in ${file.destination} </h1>`)
    }
})
app.listen(1001);
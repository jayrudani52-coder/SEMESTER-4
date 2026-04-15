var express=require("express");
var app=express();
var entrylog=(req,res,next)=>{
    console.log("Student entered...");
    next();
}
var checkid=(req,res,next)=>{
    var hasid=true;
    if(hasid){
        req.name="Nidhi";
        console.log("Verified Student...")
        next();
    }
    else{
        console.log("Not Verified...")
        res.send("No id Available");
    }
}
app.use("/Student",entrylog,checkid);
app.get("/Student",(req,res)=>{
    res.send(`Welcome ${req.name}`);
})
app.listen(8001)
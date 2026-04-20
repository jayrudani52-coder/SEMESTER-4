var express=require("express");
var app=express();
var cp=require("cookie-parser");
app.use(cp());
app.get("/",(req,res)=>{
    res.cookie("fname","ABC");
    res.cookie("lname","XYZ");
    res.cookie("Subject","Fsd-2",{maxAge:5000});
    res.cookie("email","abc@gmail.com",{expires:new Date(Date.now()+10000)});
    res.clearCookie("lname");
    res.send(req.cookies);
})
app.listen(5003);
var express=require("express");
var app=express();
const api=require("./ra");
app.use("/student",api);
app.listen(7007);
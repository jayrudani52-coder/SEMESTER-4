var path=require(path);
var sp=path.join(__dirname,"../Frontend")
app.use(express.static(sp,{index:"3.html"}));
//            ALTERNATE METHOD.
/* app.get("/",(req,res)=>{
    res.sendFile(sp+"/3.html");
}) */
app.listen(7009)
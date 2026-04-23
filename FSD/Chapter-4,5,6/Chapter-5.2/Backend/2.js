var path=require(path);
var sp=path.join(__dirname,"../")
app.use(express.static(sp,{index:"2.html"}));
app.listen(7009)
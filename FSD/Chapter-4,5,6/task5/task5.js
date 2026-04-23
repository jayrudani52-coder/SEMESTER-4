var cp=require("cookie-parser")
var express=require("express")
var app=express()
app.use(cp())
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"L63.html"}))
app.post("/up",(req,res)=>{
    var{uname,email,message,rating}=req.body
    var feedback={uname,email,message,rating}
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send(`<h1>Thank You !</h1>
     <a href='/details'>View FeedBAck</a>`)
})
app.get("/details",(req,res)=>{
    var fb=req.cookies.feedback
    if(fb){
    res.send(`<h1>Welcome ${req.cookies.fn}</h1><h2>Email Is : ${req.cookies.em}</h2><h2>Message Is : ${req.cookies.msg}</h2>
    <h2>Rating Is : ${req.cookies.rate}</h2>`)
    }
    else{
        res.send(`NO Feedback Available <a href="/">Logout</a>`)
    }
})
app.listen(6006)
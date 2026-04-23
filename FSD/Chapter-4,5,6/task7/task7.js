/* write a script to meet following requirements:
•	Create index.html file page which contains form(username,password,login button). and open it on localhost. 
•	After clicking submit button, it should jump on “savesession” page. Store username and password in session.
•	After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link here.
•	Jump on delete session page after clicking LOGOUT link. 
•	Destroy the session on this page and redirect to index.html page.
*/ 
var express=require("express");
var app=express();
var session=require("express-session");
app.use(session({secret:"123",name:"login"}));
app.use(express.static(__dirname,{index:"task7.html"}));
app.get("/savesession",(req,res)=>{
    req.session.un=req.query.uname;
    req.session.ps=req.query.pass;
    res.redirect("fetchsession");
})
app.get("/fetchsession",(req,res)=>{
    res.send(`<h1> Welcome ${req.session.un} </h1>
              <a href="/deletesession"> Logout </a>`);
})
app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.redirect("task7.html");
})
app.listen(1003);
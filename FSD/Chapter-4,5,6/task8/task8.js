/* write a script to meet following requirements:
•	Create session.html file page which contains form(username,password,login button). and open it on localhost.
•	After clicking submit button, it should jump on “save” page. Store username and password in session.
•	After saving session, redirect to “fetchdata” page and read value. On this page check authentication of user. User name and password 
    must be “admin” and “admin@123” respectively. 
            o	If this condition is true then display welcome admin and display logout link on this page(fetchdata).
                    	By clicking on logout link user should jump to “destroy” page and destroy the session there and display the
                        message “Session destroyed”. And give the link of “login” under that message. By clicking that link user will 
                        be redirected to the home page. 
            o	Else display “Please enter valid username and password” and login link on this page(fetchdata).
*/
var cp=require("cookie-parser")
var session=require("express-session")
var express=require("express")
var app=express();
app.use(session({secret:"LJU123",resave:false,saveUninitialized:false,cookie:{maxAge:10000}}))
app.use(cp())
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"L73.html"}))
app.post("/save",(req,res)=>{
    req.session.user=req.body.na
    req.session.pass=req.body.pa
    res.redirect("/fetchdata")
})
app.get("/fetchdata",(req,res)=>{
    if((req.session.user=="admin") & (req.session.pass=="admin@123")){
    res.send(`<h1>Welcome ${req.session.user}</h1><h2>Password Is : ${req.session.pass}</h2>
    <a href="/destroy">LogOut</a>`)
    }
    else{
        res.send(`<h1>Please enter valid username and password</h1><a href="/L73.html">Login</a>`)
    }
})
app.get("/destroy",(req,res)=>{
    req.session.destroy()
    res.send(`<h1>Session destroyed</h1><a href="/L73.html">Login</a>`)
    res.redirect("/L72.html")
})
app.listen(7007)
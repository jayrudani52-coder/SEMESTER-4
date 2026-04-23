var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "task4.html" }));
app.post("/next", (req, res) => {
    res.cookie("fn", req.body.fname);
    res.cookie("ln", req.body.lname);
    res.cookie("password", req.body.pass);
    res.redirect("/admin");
})
app.get("/admin", (req, res) => {
    res.clearCookie("ln");
    res.send(`<h1>Welcome ${req.cookies.fn} ${req.cookies.ln} </h1>
              <h1>Password is :${req.cookies.password} </h1>`);
})
app.listen(1003);
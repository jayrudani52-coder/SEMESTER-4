var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.type("text/html");
  res.send("<h1>Home Page - Express JS</h1>");
});

app.get("/about", (req, res) => {
  res.type("text/html");
  res.send("<h4>Express Js</h4><h2>End</h2>");
});


app.listen(5000, "localhost", () => {
console.log("Server started on http://localhost:5000");
});

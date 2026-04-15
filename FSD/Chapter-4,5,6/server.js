var express = require("express");
var app = express();
app.get("/", (req, res) => {
  //res.set("content-type","text/html");
  res.write("<h3> Hello B4 students</h3>")
  res.type("text/html")
  res.send()
});
app.listen(2005, "localhost", () => {
  console.log("Server started on http://localhost:2005");
});
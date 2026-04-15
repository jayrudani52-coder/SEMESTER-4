var express = require("express");
var app = express();

const student = {
  name: "John Doe",
  age: 20,
  grade: "A"
};

app.get("/j1", (req, res) => {
  res.type("application/json");
  res.send(student);
});

app.get("/j2", (req, res) => {
  res.json(student);
});

app.get("/j3", (req, res) => {
  res.type("application/json");
  res.write(JSON.stringify(student));
  res.end();
});

app.listen(4000, "localhost", () => {
  console.log("Student server started on http://localhost:4000");
  console.log("Try: /j1, /j2, /j3");
});


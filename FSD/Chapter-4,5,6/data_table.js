var express = require("express");
var app = express();

var data = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 22},
  {name: "Charlie", age: 28}
];

// Sort by age ascending
data.sort((a, b) => a.age - b.age);

app.get("/table", (req, res) => {
  let table = "<table border='1'><tr><th>Name</th><th>Age</th></tr>";
  data.forEach(item => {
    table += `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
  });
  table += "</table>";
  
  res.type("text/html");
  res.send(`<h2>Sorted Data Table (by age)</h2>${table}`);
});

app.listen(3010, "localhost", () => {
  console.log("Data table server on http://localhost:3010/table");
});


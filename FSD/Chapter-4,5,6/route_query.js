var express = require("express");
var app = express();

app.get("/user/:id", (req, res) => {
  const userId = req.params.id; // Route parameter
  res.type("text/html");
  res.send(`<h2>User ID from route param: ${userId}</h2>`);
});

app.get("/search", (req, res) => {
  const query = req.query.q || "No query"; // Query parameter ?q=...
  const page = req.query.page || 1;
  res.type("text/html");
  res.send(`<h2>Search query: ${query}, Page: ${page}</h2><p>Example: ?q=hello&amp;page=2</p>`);
});

app.listen(3008, "localhost", () => {
  console.log("Route/Query server on http://localhost:3008");
  console.log("Route param: http://localhost:3008/user/123");
  console.log("Query param: http://localhost:3008/search?q=hello&amp;page=2");
});

// Path module
var p=require("path");
var addr="D:/LJ/node/my.html";
var dir=p.dirname(addr);
var base=p.basename(addr);
var ext=p.extname(addr);
console.log(`Directory is ${dir} Basename is ${base} Extension is ${ext}`);

var ps=p.parse(addr);
console.log(ps);
var fs=require("fs")
//fs.mkdirSync("abc")
fs.writeFileSync("abc/my.txt","Node Js")
fs.appendFileSync("./abc/mt.txt","\n How are you ?");
var r1=fs.readFileSync("./abc/mt.txt");
fs.writeFileSync("./abc/new.txt",r1)
fs.unlinkSync("./abc/my.txt")


var p=require("path");
var fs=require("fs");
var mypath="LJ/First.txt";
var dir=p.dirname(mypath);
var base=p.basename(mypath);
/*fs.mkdir(dir,(e)=>{
    if(e){
        throw(e);
    }
    else{
        console.log("Created.......");
    }
});*/
fs.writeFile(dir+"/"+base,"Hello",(e)=>{
    if(e){
        throw(e);
    }
    else{
        console.log("Written.......");
    }
});
fs.copyFile(dir+"/"+base,dir+"/second.txt",(e)=>{
    if(e){
        throw(e);
    }
    else{
        console.log("Written.......");
    }
});
fs.unlink(dir+"/"+base,(e)=>{
    if(e){
        throw(e);
    }
    else{
        console.log("Deleted.......");
    }
});
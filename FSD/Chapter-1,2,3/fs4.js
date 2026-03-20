var fs=require("fs");
fs.writeFile("s1.txt","LJ University",(e)=>{
    if(e){ 
        console.log(e);
    }
    else{
        console.log("Data Written........");
    }
});
fs.writeFile("s2.txt","Hii",(e)=>{
    if(e){ 
        console.log(e);
    }
    else{
        console.log("Data Written 1........");
    }
});
fs.appendFile("s2.txt","LJ University",(e)=>{
    if (e){
        throw(e);
    }
    else{
        console.log("Data Appended........");
    }
});
fs.unlink("s1.txt",(e)=>{
    if(e){
        throw(e);
    }
    else{
        console.log("Deleted....");
    }
});
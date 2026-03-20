var fs=require("fs");
/*fs.mkdir("afs",(e)=>{
    if(e) throw e;
    console.log("Folder Created");
});*/
fs.writeFile("afs/test.txt","Hii!!",(e)=>{
    if(e){ 
        console.log(e);
    }
    else{
        console.log("Data Written........");
    }
});
fs.appendFile("afs/test.txt","How are You ?",(e)=>{
    if (e){
        throw(e);
    }
    else{
        console.log("Data Appended........");
    }
});
fs.readFile("afs/test.txt","utf-8",(e,d)=>{
    if(e){
        throw(e);
    }
    else{
        console.log(d);
    }
});
fs.copyFile("afs/test.txt","temp.txt",(e)=>{
    if(e){
        throw(e);
    }
    else{
        console.log("Data Copied.....");
    }
});
fs.rename("afs/test.txt","afs/my.txt",(e)=>{
    if(e){
        throw(e);
    }
    else{
        console.log("Done......");
    }
});
fs.unlink("afs/my.txt",(e)=>{
    if(e){
        throw(e);
    }
    else{
        console.log("Deleted....");
    }
});
fs.rmdir("afs",(e)=>{
    if(e){
        console.log(e);;
    }
    else{
        console.log("Folder Deleted....");
    }
});
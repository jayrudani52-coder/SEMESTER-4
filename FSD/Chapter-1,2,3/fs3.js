var fs=require("fs");
fs.writeFileSync("b4.txt","Hii!!");
console.log("Sync Task Completed......");
fs.writeFile("b5.txt","Hii",(e)=>{
    if(e){
        console.log(e)
    }
    else{
        console.log("Async task Completed....")
    }
});
console.log("Task Execution.....")
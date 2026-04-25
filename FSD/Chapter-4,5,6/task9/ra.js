const express=require("express");
const router=express.Router();
var obj=[{name:"x",id:101,branch:"CSE",city:"Ahmedabad",age:30},
         {name:"y",id:102,branch:"CE",city:"Rajkot",age:20},
         {name:"z",id:103,branch:"IT",city:"Mumbai",age:20},
         {name:"x",id:104,branch:"CE",city:"Amreli",age:25},
         {name:"y",id:105,branch:"CSE",city:"Ahmedabad",age:27},
         {name:"z",id:106,branch:"IT",city:"Mumbai",age:30}]
router.get("/",(req,res)=>{
    res.type("text/html");
    for(o of obj){
        res.write(`<h2> Name: ${o.name} 
                        id: ${o.id} 
                        Branch: ${o.branch} 
                        city: ${o.city} 
                        age: ${o.age} </h2>`);
    }
    res.send();
})
router.get("/id/:id",(req,res)=>{
    var data=obj.filter((i)=> i.id==req.params.id)
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No student data found");
    }
})
router.get("/branch/:branch",(req,res)=>{
    var data=obj.filter((b)=> b.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No student data found");
    }
})
module.exports=router;
const { mongo } = require("mongoose");
const mg=require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/mdb4").then(()=>{
    console.log("success")
}).catch((e)=>{
    console.log(e)
})

const userschema=new mg.Schema({
    username:{
        type:String,
        required:true,
        minlength:[4,"Atleast 4 characters"],
        maxlength:20,
        match:[/^[A-Z a-z]+[0-9]+$/,"must start with letter and end with digit"],
        trim:true,
        uppercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/\S+@\S+\.\S+/
    },
    age:{type:Number,max:45,min:18},
    role:{
        type:String,
        enum:["admin","user"],
    default:"user"}
})
mg.pluralize(null);

const mymodel=new mg.model("user",userschema)

const newfun=async()=>{
    try{
        const data=new mymodel({username:"test123",email:"test3113@gmail.com",age:19,role:"admin"})
        const result=await data.save();
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}
newfun();
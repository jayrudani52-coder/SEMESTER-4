const mg=require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/mdb4").then(()=>{
    console.log("success")
}).catch((e)=>{
    console.log(e)
})
const myschema=new mg.Schema({
    username:String,email:String,active:Boolean,age:Number,
    doj:{type:Date,default:new Date().toLocaleDateString()}
},{strict:true})

mg.pluralize(null);

const mymodel=new mg.model("person",myschema)

const myfun=async()=>{
    try{
        const data=new mymodel({
            username:"ABC",
            email:"abc@gmail.com",
            active:true,
            age:30
        })
        const result=await data.save();
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}
myfun();
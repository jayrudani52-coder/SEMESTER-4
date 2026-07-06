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

const newfun=async()=>{
    try{
        const data=[{username:"PQR",email:"pqr@gmail.com",active:true,age:30},
                    {username:"OPQ",email:"opq@gmail.com",active:false,age:37}];

        const result=await mymodel.insertMany(data);
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}
newfun();
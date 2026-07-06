const mg = require("mongoose");
const validator = require("validator");
mg.connect("mongodb://127.0.0.1:27017/mdb4");
const myschema = new mg.Schema({
    product: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        maxlength: [8, "max length is 8"],
        minlength: 5,
        vailidate: [validator.isAlphanumeric, "Enter valid Name"],
        // match: /^[A-Z a-z 0-9]{5,8}$/,
        }
    },
    {
        email: {
            type: String,
            unique: true,
            validate: [validator.isEmail, "No valid"]
        }
    },
    {
        qty: {
            type: Number,
            max: 5,
            min: 1
        }
    },
    {
        role: {
            type: String,
            enum: ["seller", "buyer"],
            default: "seller",
        }
    })

const mymodel = new mg.model("products", myschema)

const myfun=async()=>{
    try{
        const data=new mymodel({
            product:"test123",
            email:"abcd@gmail.com",
            qty:3,
            role:"buyer",
        })
        const result=await data.save();
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}
myfun();
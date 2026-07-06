const mg = require("mongoose")
const validator = require('validator')
mg.connect("mongodb://127.0.0.1:27017/mdb4")

const myschema = new mg.Schema({
  coursename: String,
  instructor: String,
  duration: Number,
  fees: Number,
  mode: {
    type: String,
    enum: ['online', 'offline']
  }
})
const mymodel = new mg.model("course", myschema)

const c = [{
  coursename: "MERN",
  instructor: "ABC",
  duration: 2,
  fees: 20000,
  mode: "offline"
},
{
  coursename: "PYTHON",
  instructor: "XYZ",
  duration: 1,
  fees: 8000,
  mode: "online"
},
{
  coursename: "ML",
  instructor: "PQR",
  duration: 3,
  fees: 25000,
  mode: "offline"
},
{
  coursename: "CLOUDCOMPUTING",
  instructor: "JKL",
  duration: 3,
  fees: 15000,
  mode: "online"
},
{
  coursename: "U1/UX Design",
  instructor: "MNO",
  duration: 5,
  fees: 27000,
  mode: "offline"
}]

const myfun = async () => {
  try {
    const result = await mymodel.insertMany(c)
    console.log(result)
    const test = await mymodel.updateOne({ coursename: "ABC" },
      {
        $set:
        {
          duration: 4,
          fees: 30000
        }
      },
      {
        upsert: true
      }
    )
    console.log(test);
    const test1 = await mymodel.findOne({coursename: "MERN"})
    console.log('Id', test1._id);
    const test2 = await mymodel.findByIdAndUpdate(test1._id, {
      fees: 35000,
      duration: 3
    })
    console.log(test2)
    const test3 = await mymodel.findByIdAndDelete(test1._id)
    if (test3) {
      console.log("deleted", test3)
    }
    else {
      console.log('No course Found');
    }
  }
  catch (e) {
    console.log(e);
  }
}
myfun()
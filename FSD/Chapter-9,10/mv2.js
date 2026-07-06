const mg = require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/mdb4")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection error:", err));

const myschema = new mg.Schema({
    coursename: String,
    instructor: String,
    duration: Number,
    fees: Number,
    mode: {
        type: String,
        enum: ['online', 'offline']
    }
});

const Course = mg.model("course", myschema);

const myfun = async () => {
    try {
        const secondHighestFeeCourse = await Course.find()
            .sort({ fees: -1 })
            .skip(1)
            .limit(1);
        console.log("2nd Highest Fee Course:", secondHighestFeeCourse);

        const specificOnlineCourses = await Course.find({
            duration: { $gt: 4 },
            mode: 'online',
            fees: { $gte: 20000 }
        });
        console.log("Specific Online Courses:", specificOnlineCourses);

        const offlineCount = await Course.countDocuments({ mode: 'offline' });
        console.log("Total Offline Courses:", offlineCount);

        const increaseFeesResult = await Course.updateMany({}, { $mul: { fees: 1.1 } });
        console.log("Increase fees status:", increaseFeesResult);

        const decreaseDurationResult = await Course.updateMany({}, { $inc: { duration: -1 } });
        console.log("Decrease duration status:", decreaseDurationResult);

        const shortCourses = await Course.find({ duration: { $lt: 5 } })
            .select("coursename fees -_id");
        console.log("Short Courses (Name & Fees):", shortCourses);

    } catch (e) {
        console.error("Query execution error:", e);
    } finally {
        mg.connection.close();
    }
};
myfun();
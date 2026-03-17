//! import required modules
const mongoose = require("mongoose")

//! connect db
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully...")
    } catch (error) {
        console.error("Weeoe connecting MongoDB:", error)
    }
}

//! export modules
module.exports = { connectDB }

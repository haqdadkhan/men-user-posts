//! import requried modules
const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { connectDB } = require("./config/db")

//! create app instance
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())

//! connect database
connectDB()

//! define route handler
app.get("/", (req, res) => {
    res.send("Hellow World!")
})

//! start the server
app.listen(PORT, () => {
    console.log("Server is running on PORT 5000...");
})

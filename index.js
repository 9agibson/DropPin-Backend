const express = require("express")
const mongoose = require("mongoose")
const app = express()
const dotenv = require('dotenv')
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')
const cors = require("cors")

app.use(cors())

dotenv.config();

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
.then(() => {
    console.log("mongoDB Connected");
})
.catch((err) => 
    console.log(err))

app.use("/api/pins", pinRoute)
app.use("/api/users", userRoute)

app.listen(8800,() => {
    console.log("server is running on port 8800")
})
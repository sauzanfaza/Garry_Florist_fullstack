import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import messageRoutes from "./routes/messageRoutes.js"

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(messageRoutes)

app.get("/", (req, res) => {
    res.send("backend dah on")
})

app.listen(process.env.PORT, () => {
    console.log("Server jalan di port", process.env.PORT)
})
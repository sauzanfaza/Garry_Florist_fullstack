import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        name: String,
        phone: String,
        email: String,
        message: {type: String, required: true}
    },
    {timestamps: true}
)

export default mongoose.model("Message", messageSchema)
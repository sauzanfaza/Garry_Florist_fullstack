import Message from "../models/Message.js";

export const createMessage = async (req, res) => {
    const { name, phone, email, message} = req.body
    try{
        const newMessage = await Message.create({name, phone, email, message})
        res.status(201).json({ success: true, data: newMessage})
    } catch(error) {
        res.status(400).json({ success: false, error: error.message})
    }
}
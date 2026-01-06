import Message from "../models/Message.js";

export const createMessage = async (req, res) => {
    try{
        const newMessage = await Message.create(req.body)
        res.status(201).json(newMessage)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}
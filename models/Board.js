import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        
    }
})
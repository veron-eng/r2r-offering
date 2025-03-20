import mongoose from 'mongoose';

const connectMongo = async () => {
    try{
        await mongoose.connect();
    } catch(e){
        console.error("MongoDB connection failed", e.message);
    }
}
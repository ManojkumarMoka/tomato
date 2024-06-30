import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://manojkumarmoka:8096611739@cluster0.cdsihg7.mongodb.net/tomato').then(()=>console.log("DB connected"));
}
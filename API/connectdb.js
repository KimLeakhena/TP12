import mongoose from 'mongoose'

export default function connectDB()
{
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://127.0.0.1:27017/tp12')
    console.log("Connected to mongoose")
}
import mongoose from "mongoose";


export async function connectDB(){
    return mongoose.connect(process.env.DB_HOST,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
}
let db;

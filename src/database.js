import mongoose from "mongoose";


let db;
export async function connectDB(){
    return mongoose.connect(process.env.HOST_PORT,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
}

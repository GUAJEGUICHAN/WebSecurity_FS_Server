import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./database.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
const app = express();
dotenv.config();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*", //여기에 해당되는 도메인은 통과되게 설장한다. cors policy에 통과되게 하는 것이다
    optionsSuccessStatus: 200,
    credentials: true //Access-Control
  })
);

app.get("/", (req, res, next) => {
  console.log("get");
  res.send("test 성공");
});

app.post("/post", (req, res, next) => {
  console.log(req.body.id);
  console.log(req.body.pw);
  console.log("포스트완료");
  res.status(200).json({ success: true });
});

app.listen(5050, () => {
  console.log("I'm fine");
});

connectDB().then(()=>{
  console.log("init!")
  const server = app.listen(process.env.HOST_PORT);
}).catch(console.error)

const userSchema = new mongoose.Schema({
  id:{type:String, required:true},
  pw:{type:String, required:true},
})

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

  User({id:req.body.id, pw:req.body.pw}).save();

  res.status(200).json({ success: true });

});

// app.listen(8080, () => {
//   console.log("I'm fine");
// });

connectDB().then(()=>{
  console.log("init!")
  const server = app.listen(process.env.HOST_PORT,() => {
    console.log("I'm fine");
  });
}).catch(console.error)

const userSchema = new mongoose.Schema({
  id:{type:String, required:true},
  pw:{type:String, required:true},
})

const User = mongoose.model('User',userSchema)//유저 컬렉션 사용, 유저스키마 활용

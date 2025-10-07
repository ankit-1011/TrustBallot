import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import SignUp from "./models/SignUp";
dotenv.config();


const app = express();
const PORT = 3000;
const JWT_SECRET =process.env.JWT_SECRET;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

const mongoURI = "mongodb://127.0.0.1:27017/trustballot";



mongoose.connect(mongoURI)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err);
  });

app.get('/', (req, res) => {
  res.send("Express is running");
});


app.post('/signup', async (req,res)=>{
try{
  const {name , email , password} = req.body;

  if(!email || !password || !name){
    return res.status(400).json({message:"All Fields are required"})
  }

  const existingUser = await SignUp.findOne({email});
  if(existingUser){
    return res.status(400).json({message:"User Already exits"})
  }

  const hashedPassword = await bcrypt.hash(password,10);

  const newUser = new SignUp({
    name,
    email,
    password:hashedPassword,
  });

  await newUser.save();
  res.status(201).json({message:"User Registered Successfuly"});

}catch(err){
  console.error(err);
  res.status(500).json({message:"Server Error"});
}
})



app.post('/login',async (req,res)=>{
try{
const {email,password} = req.body;

const user = await SignUp.findOne({email});
if(!user){
return res.status(400).json({message:"Invalid Credentials"});
}

const isMatch = await bcrypt.compare(password,user.password);
if(!isMatch){
  res.status(400).json({message:"Invalid Credentials"});
}

const token = jwt.sign({ id: user._id }, JWT_SECRET!, { expiresIn: '1h' });
res.status(200).json({token,user:{id:user._id,name:user.name,email:user.email}});

}catch(err){
  console.error(err);
  res.status(500).json({messgae:"Server Error"});
}
})



app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
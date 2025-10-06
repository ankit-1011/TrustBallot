import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import SignUp from "./models/SignUp";



const app = express();
const PORT = 3000;

app.use(cors());
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

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const SignUpSchema = require('./models/SignUP.ts');
const port = 5000;

app.use(cors());
app.use(express.json())

const mongoURI = "mongodb://127.0.0.1:27017/trustballot";

mongoose.connect(mongoURI,
).then(() => {
        console.log("✅ Moongodb connected");
    }).catch((err) => {
        console.log("❌ MongoDB connection error:", err);
    })

    const SignUp = mongoose.model('SignUp',SignUpSchema);

app.get(('/'), (req, res) => {
    res.send("express is running");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
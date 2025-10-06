
import { Schema, model } from "mongoose";


const SignUpSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})


const SignUp = model("SignUp", SignUpSchema);

export default SignUp;
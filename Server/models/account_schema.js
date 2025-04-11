const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    role: {
        type: String,
        enum: ['Admin', 'Content_creator'],
        required: [true, 'Role is required'],
    },
    phone: {  // Add this field for SMS functionality
        type: String,
        required: [true, 'Phone number is required for OTP'],
    },
    resetPasswordOTP: String,
    resetPasswordOTPExpires: Date
},
{
    timestamps: true,
});
const Accountmodel = mongoose.model('Account', accountSchema);
module.exports = Accountmodel;
const Account = require("../../models/account_schema");
const bcrypt = require("bcrypt")

exports.update = async(req,res)=>{
    const Userid = req.session.Userid
    try {
        if (!Userid) {
           return res.status(403).json({success:false,message:"User id is required"})
        }
        const {username,email,password} = req.body
         // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const Updatequery = await Account.findByIdAndUpdate(Userid,{username,email,password:hashedPassword},{new:true})
        .then(()=>{
            res.status(201).json({success:true,message:"updating profile succeffully"})
        })
        .catch((err)=>{
            res.status(400).json({success:false,message:"Error while updating profile"})
        })
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Internal server error during login" 
        });
    }
}
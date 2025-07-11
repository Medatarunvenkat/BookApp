import express from "express";
import User from "../models/User.js";
const router=express.Router();
router.post("/register",async(req,res)=>{
   try{
    const {email,username,password}=req.body;
    if(!username || !email || !password)
    {
        return res.status(400).json({message:"All fields are req."});
    }
    if(password.length<6)
    {
        return res.status(400).json({message:"Pass length must be greater than 6."})
    }
    if(username.length<3)
    {
        return res.status(400).json({message:"Username length must be greater than 6."})
    }
    const existingEmail=await User.findOne({email});
    if(existingUser) return res.status(400).json({message:"Email already exists"});

    const existingUsername=await User.findOne({username});
    if(existingUser) return res.status(400).json({message:"Username already exists"});

    const user=new User({
        
    })

   }
});

router.post("/login",async(req,res)=>{
    res.send("Login");
})

export default router;

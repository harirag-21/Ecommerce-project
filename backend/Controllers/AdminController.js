const jwt=require('jsonwebtoken');
const User=require('../Models/AdminModel'); 
const bcrypt=require("bcrypt");
const validator=require("validator")


const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{
        expiresIn:"7d"
    })
}

exports.adminLogin=async(req,res)=>{
    const{email,password}=req.body;
    try{
        if(!email || !password){
            return res.status(400).json({error:"All fields are required"});
        }
        const admin=await User.findOne({email});
        if(!admin){
            return res.status(400).json({error:"Invalid email or password"});
        }
        const isMatch=await bcrypt.compare(password,admin.password);
        if(!isMatch){
            return res.status(400).json({error:"Invalid email or password"});
        }
        const token=createToken(admin._id);
        res.status(200).json({success:true,message:"Admin login successful",token});
    }catch(error){
        res.status(500).json({error:"Server error"})
    }
}

exports.adminSignup=async(req,res)=>{
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingAdmin = await User.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ error: "Admin already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = await User.create({ name, email, password: hashedPassword });
        const token = createToken(newAdmin._id);
        res.status(201).json({ success: true, message: "Admin signup successful", token });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}

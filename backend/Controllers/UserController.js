const jwt=require('jsonwebtoken');
const User=require('../Models/UserModel'); 
const bcrypt=require("bcrypt");
const validator=require("validator")


const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{
        expiresIn:"7d"
    })
}


exports.registerUser = async (req, res) => {
    console.log("DEBUG req.body:", req.body);

const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ error: "Password is not strong enough" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }   
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        const token = createToken(savedUser._id);
        res.status(201).json({ success: true, message: "User registered successfully", token });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
exports.loginUser=async(req,res)=>{
    const{email,password}=req.body;
    try{
        if(!email || !password){
            return res.status(400).json({error:"All fields are required"})
        }   
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Invalid email or password"})
        }   
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({error:"Invalid email or password"})
        }   
        const token=createToken(user._id);
        res.status(200).json({success:true,message:"Login successful",token});
    }catch(error){
        res.status(500).json({error:"Server error"})    
}
}

 const mongoose=require("mongoose")
 const mongoDb=async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("database connected"))
    .catch((err)=>console.log("error",err))
 }
 module.exports=mongoDb
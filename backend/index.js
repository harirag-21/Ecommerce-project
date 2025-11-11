const express=require("express");
require("dotenv").config()
const PORT=process.env.PORT
const mongoDb=require("./Config/MongoDb")
const cors=require("cors")
const userRoutes=require("./Routes/UserRoutes")
const productRoutes=require("./Routes/ProductRoutes")
const cloudinary=require("./Config/Cloudinary")
const adminRoutes=require("./Routes/AdminRoutes")
const cartRoutes=require("./Routes/CartRoutes")
const orderRoutes = require("./Routes/OrderRoutes")
const app=express()

mongoDb()
app.use(cors({origin:["http://localhost:3000","http://localhost:3001"],credentials:true}))
app.use(express.json())
app.use("/api/admins",adminRoutes)
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/orders", orderRoutes);


app.use('/images', express.static('images'));




app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}` )
})
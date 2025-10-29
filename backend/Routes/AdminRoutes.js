const express=require("express");
const{adminLogin,adminSignup}=require("../Controllers/AdminController");
const adminRoutes=express.Router()
adminRoutes.post("/adminlogin",adminLogin);
adminRoutes.post("/adminsignup",adminSignup);
module.exports=adminRoutes;

import React, { useState } from 'react'
import rectangle from "../Assets/Rectangle 3605.png"
import Subscribe from '../Components/Subscribe'
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink,useNavigate } from 'react-router-dom'
function Login() {
  const [email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  const[error,setError]=useState('')
  const navigate = useNavigate(); // 👈 initialize navigate

  const validateEmail=(email)=>{
    const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
  }
    const handleSubmit =async (e) => {
  e.preventDefault();
  setError('');

  if (!email.trim() && !password.trim()) {
    setError("Email and password are required");
    toast.error("Please enter both email and password.");
    return;
  }

  if (!email.trim()) {
    setError("Email is required");
    toast.error("Please enter your email.");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email");
    toast.error("Please enter a valid email address.");
    return;
  }

  if (!password.trim()) {
    setError("Password is required");
    toast.error("Please enter your password.");
    return;
  }

  // if (password.length < 6) {
  //   setError("Password must be at least 6 characters");
  //   alert("Password must be at least 6 characters.");
  //   return;
  // }
  try {
  const response = await axios.post("http://localhost:8000/api/users/login", {
  email,
  password,
  });
  
  if (response.data.success) {
  // setToken(response.data.token);
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("userId", response.data.id);
    alert("Login successful!");
  toast.success("Login successfully!");
  //  navigate('/');
   console.log("Redirecting to /");
  navigate('/');
  
  } else {
  toast.error(response.data.message || "Something went wrong");
  }
  } catch (error) {
  console.error("Signup error:", error.response || error.message || error);
  toast.error(
  error.response?.data?.message || "Server error. Please try again later."
  );
  }
  console.log("Sending data:", {email, password });
};
  return (
    <div>
      <>
           <div className='flex mt-[180px] justify-center'>
                     <div><h2 className='mt-[20px]  font-medium text-2xl font-prata text-[35px] text-{gray}'>Login </h2></div>
                    <div><img src={rectangle} alt='rectangle' className='mt-[40px] ml-[10px]'/></div>
                  </div>
                  <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-[20px] gap-[20px]'>
                  <div><input type='email' onChange={(e)=>setEmail(e.target.value)} className=' w-[350px] h-[40px] border-2 border-black' name='text' placeholder='Email'/></div>
                  <div><input type='password' onChange={(e)=>setPassword(e.target.value)} className=' w-[350px] h-[40px] border-2 border-black' name='text' placeholder='Password'/></div>
                
                <div className='flex justify-center items-center  gap-[100px] text-sm'>
                <div>Forgot your password?</div>
                <NavLink to="/signup">Create account</NavLink>
                </div>
                 <div><button type='submit' className='border-2 border-black bg-black text-white  w-[150px] h-[40px]'>LOGIN</button></div></form>
    </>
        <Subscribe/>
    </div>
    
  )
}

export default Login

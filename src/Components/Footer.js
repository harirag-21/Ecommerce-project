import React from 'react'
import logo from "../Assets/logo.png"

function Footer() {
  return (
    <div>
      <div className='flex'>
      <div className='ml-[66px]  mt-[220px]'><img src={logo} alt='logo'/></div>
      <div className='mt-[220px] ml-[430px] text-xl font-outfit font-bold'>COMPANY</div>
      <div className='mt-[220px] ml-[330px] text-xl font-bold'>GET IN TOUCH</div>
      </div>
      
      <div className=' flex  text-sm ml-[66px] mt-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>when an unknown printer took a galley of type <br/> and scrambled it to make a type specimen book.
      <div className='flex flex-col gap-[5px] ml-[120px]'>
      <div>Home</div>
      <div>About</div>
      <div>Delivery</div>
      <div>Privacy Policy</div>
      </div>
      
      <div className='flex flex-col gap-[5px] ml-[320px]'>
      <div>+1-212-456-7890</div>
      <div>greatstackdev@gmail.com</div>
      </div>
      </div>
      
      <div className='ml-[530px] mt-[100px] text-lg'>Copyright 2024 © GreatStack.dev - All Right Reserved.</div>
      </div>
      
      
      
        )
      }

export default Footer

import React from 'react'
import logo from "../Assets/logo.png"
import {NavLink} from 'react-router-dom'
function Header() {
  return (
<>

    <div className='flex ml-[66px] mt-[29px]' >
    <div><img src={logo} alt='logo'/></div>
    



    <div className='flex ml-[264px] mt-[8px] gap-[22px] text-lg '>
    
    </div>
    <div className='flex gap-[22px] ml-[240px]'>
     <NavLink to="/"><button type='submit' className='pb-[10px] bg-blue-400 w-[150px] h-[40px] ml-[450px]'>LOGOUT</button></NavLink>
      
    </div>
    </div>
  <div className='border border-#ADADAD w-[1350px] h-[1px] '></div>
    
    </>
  )
}

export default Header
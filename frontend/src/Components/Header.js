import React from 'react'
import logo from "../Assets/logo.png"
import search from "../Assets/search icon.png"
import profile from "../Assets/profile-icon.png"
import vector from "../Assets/Vector.png"
import { NavLink } from 'react-router-dom'
function Header() {
  return (
<>
    <div className='flex ml-[66px] mt-[29px]' >
    <div><img src={logo} alt='logo'/></div>
    



    <div className='flex ml-[354px] mt-[8px] gap-[22px] text-lg '>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="/collection">COLLECTION</NavLink>
    <NavLink to="/about">ABOUT</NavLink>
    <NavLink to="/contact">CONTACT</NavLink>
    </div>

    <div className='flex gap-[22px] ml-[240px]'>
      <NavLink to='/singlepage'><img src={search} alt='search'/></NavLink>
      <NavLink to='/signup'><img src={profile} alt='profile'/></NavLink>
      <NavLink to='/login'><img src={vector} alt='vector'/></NavLink>
      
    </div>
    </div>
  <div className='border border-#ADADAD w-[1200px] h-[1px] ml-[66px]'></div>
    </>
  )
}

export default Header
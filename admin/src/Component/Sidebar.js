import React from 'react'

import {NavLink} from 'react-router-dom'
function Sidebar() {
  return (
    <>
    
      <div className='flex'>
        <div className='flex flex-col gap-[20px] border-r-2 h-[600px] w-[250px] border-gray pt-[30px] pl-[60px]'>
        <NavLink to="/addproduct"><button type='button' className='border-2 border-gray  text-black  w-[170px] h-[40px]'>Add Items</button></NavLink>
        <NavLink to="/list"><button type='button' className='border-2 border-gray  text-black  w-[170px] h-[40px]'>List</button></NavLink>
        <NavLink to="/orders"><button type='button' className='border-2 border-gray  text-black  w-[170px] h-[40px]'>Orders</button></NavLink>
      </div>
</div>
    </>
  )
}
export default Sidebar

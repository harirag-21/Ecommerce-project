import React from 'react'
import rectangle from "../Assets/Rectangle 3605.png"
function Signup() {
  return (
   <div>
         <>
              <div className='flex mt-[180px] justify-center'>
                        <div><h2 className='mt-[20px]  font-medium text-2xl font-prata text-[35px] text-{gray}'>Sign Up </h2></div>
                       <div><img src={rectangle} alt='rectangle' className='mt-[40px] ml-[10px]'/></div>
                     </div>
                     <div className='flex flex-col justify-center items-center mt-[20px] gap-[20px]'>
                         <div className=''><input type='text' className=' w-[350px] h-[40px] border-2 border-black' name='text' placeholder='Name'/></div>
                     <div className=''><input type='email' className=' w-[350px] h-[40px] border-2 border-black' name='text' placeholder='Email'/></div>
                     <div className=''><input type='password' className=' w-[350px] h-[40px] border-2 border-black' name='text' placeholder='Password'/></div>
                   
                
                    <div><button type='submit' className='border-2 border-black bg-black text-white  w-[150px] h-[40px]'>Create</button></div></div>
       </>
       </div>
  )
}

export default Signup

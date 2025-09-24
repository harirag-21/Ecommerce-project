import React from 'react'
import rectangle from "../Assets/Rectangle 3605.png"
import contact from "../Assets/contact_img.png"
function Contact() {
  return (
    <div>
    <div className='flex ml-[630px] mt-[70px] gap-[10px] text-[25px]'>
      <div><h2 className='text-grey'>CONTACT</h2></div>
      <div><h2 className='font-bold'>US</h2></div>
      <div><img src={rectangle} alt='rectangle' className='mt-[20px] ml-[10px]'/></div>
    </div>
<div className='flex gap-[30px]'>
<div><img src={contact} className='mt-[66px] ml-[200px] w-[500px]' alt='contact'/></div>
<div><h2 className='mt-[100px] font-bold text-[20px]'>OUR STORE</h2>
<div className='mt-[30px] text-[18px]'>54709 Willms Station<br/> 
Suite 350, Washington, USA<br/>
<div className='mt-[30px] text-[18px]'>Tel: (415) 555‑0132</div>
<div className='text-[18px]'>Email: greatstackdev@gmail.com</div>
<div className='mt-[30px] font-bold text-[20px]'>CAREERS AT FOREVER</div>
<div className='text-[18px]'>Learn more about our teams and job openings.</div>
<div><button type='submit' className='border-2 border-black mt-[30px] w-[150px] h-[60px]'>EXPLORE JOBS</button></div>
</div>
</div>
</div>  
</div>
  )
}

export default Contact

import React from 'react'
import rectangle from "../Assets/Rectangle 3605.png"
import header from "../Assets/header_img.png"

<link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
function Banner() {
  return (
<div className='flex border border-black w-[1195px] h-[500px] ml-[70px] justify-between'>
  <div>
    <div className='flex'>
      <div><img src={rectangle} alt='rectangle' className='mt-[200px] ml-[100px]'/></div>
      <div><h2 className='mt-[186px] ml-3 font-medium text-lg'>OUR BESTSELLERS</h2></div>
    </div>
    <div><h2 className='ml-[100px] mt-5 text-5*1 font-prata font-bold text-xl'>LATEST ARRIVALS</h2></div>
    <div className='flex'>
       <div><h2 className='mt-[20px] ml-[100PX] font-medium text-lg'>SHOP NOW</h2></div>
      <div><img src={rectangle} alt='rectangle' className='mt-[30px] ml-[10px]'/></div>
     
    </div>
  </div>
  <div>
    <div ><img src={header} className='w-[600px] h-[498px]' alt='header'/></div>

  </div>
</div>
  )
}

export default Banner

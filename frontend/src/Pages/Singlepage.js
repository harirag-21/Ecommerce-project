import React from 'react'
import first from "../Assets/Rectangle 3635 (2).png"
import big from "../Assets/Rectangle 3634 (1).png"
function Singlepage() {
 const menimages=[{
  menimage:first
 },{
  menimage:first
 },{
  menimage:first
 },{
  menimage:first
 }
]
    return (
      <>
      <div className='flex gap-[10px] mt-[51px]'>
    <div className=' grid gap-[10px] ml-[66px]'>
      {
        menimages.map((i)=>(
          <div><img src={i.menimage}/></div>
        ))
      }
    </div>
    
    <div><img src={big} className='w-[450px]' alt='big'/></div>
    <div className=' flex flex-col gap-5'>
    <div><p className='text-[25px]'>Men Round Neck Pure Cotton T-shirt</p></div>
    <div><h2 className='text-[25px]'>$149</h2></div>
    <div><h2 className=''>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short<br/> sleeves, worn as an undershirt or outer garment.</h2></div>
    <div><h2 >Select Size.</h2></div>
    </div>
    </div>
      
    </>
  )
}

export default Singlepage

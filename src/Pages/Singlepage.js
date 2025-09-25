import React from 'react'
import first from "../Assets/Rectangle 3635 (2).png"
import big from "../Assets/Rectangle 3634 (1).png"
import dress from "../Assets/Rectangle 3608.png"
import dress2 from "../Assets/Rectangle 3611.png"
import dress3 from "../Assets/Rectangle 3619.png"
import dress4 from "../Assets/Rectangle 3609.png"
import dress5 from "../Assets/Rectangle 3635.png"
import rectangle from "../Assets/Rectangle 3605.png"
import Collection from '../Components/Collection'
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
const collection=[{
    collections:dress,
    ctext:"Women Round Neck Cotton Top" ,
    crate:"$149"
  },{
      collections:dress2,
    ctext:"Women Round Neck Cotton Top" ,
    crate:"$149"
  },{
      collections:dress3,
    ctext:"Women Round Neck Cotton Top" ,
    crate:"$149"
  },{
      collections:dress4,
    ctext:"Women Round Neck Cotton Top" ,
    crate:"$149"
  },{
  collections:dress5,
    ctext:"Women Round Neck Cotton Top",
    crate:"$149"
  }]
  const sizes=[{
    size:"S"
  },{
     size:"M"
  },{
     size:"L"
  },{
     size:"XL"
  },{
     size:"XXL"
  
  }]
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
    <div className=' flex flex-col  ml-[20px]'>
    <div><p className='text-[25px]'>Men Round Neck Pure Cotton T-shirt</p></div>
    <div><h2 className='text-[25px] mt-[10px]'>$149</h2></div>
    <div><h2 className='text-sm mt-[10px]'>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short<br/> sleeves, worn as an undershirt or outer garment.</h2></div>
    <div><h2 className='mt-[10px]'>Select Size.</h2></div>

    <div className="flex gap-[10px] mt-[20px]">
    {
      sizes.map((i)=>(
      <label>
    <input type="radio" value="S" name="size" className="hidden peer" />
    <span class=" w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-200 peer-checked:text-black text-lg">{i.size}</span></label>
      ))
    }
    
    
    
    
    {/* <label>
    <input type="radio" className="hidden peer" />
    <span class=" w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md text-lg">S</span></label>
      <label>
    <input type="radio" className="hidden peer" />
    <span class=" w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md text-lg">M</span></label>
     
      <label>
    <input type="radio" className="hidden peer" />
    <span class=" w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md text-lg">L</span></label>
     
      <label>
    <input type="radio" className="hidden peer" />
    <span class=" w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md text-lg">XL</span></label>
     
     <label>
    <input type="radio" className="hidden peer" />
    <span class=" w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md text-lg">XXL</span></label> */}
        
  </div>
<button type='submit' className='bg-black w-[150px] h-[50px] text-white mt-[30px]'>ADD TO CART</button>
<div className='border border-black w-[400px] mt-[20px]'></div>
<div className='text-sm mt-[20px]'>
<div className=''>100% Original product.</div>
<div className='mt-[10px]'>Cash on delivery is available on this product.</div>
<div className='mt-[10px]'>Easy return and exchange policy within 7 days..</div>
</div>
  </div>
  </div> 
  <div className='flex ml-[66px] mt-[100px]'>
    <div className='border w-[120px] h-[40px] text-center font-bold'>Description</div>
    <div className='border w-[120px] h-[40px] text-center'>Reviews (122)</div>
    </div>    
   <div className='border border-gary w-[1200px] h-[241px] ml-[66px]'>
    <div className='w-[1000px] mt-[10px] ml-[10px]'>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</div>
    <div className='w-[1000px] mt-[10px] ml-[10px]'>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</div>
    </div>
     <div className='flex'>
               <div><h2 className='mt-[20px] ml-[578PX] font-medium text-2xl'>LATEST COLLECTIONS</h2></div>
              <div><img src={rectangle} alt='rectangle' className='mt-[30px] ml-[10px]'/></div>
            </div>
    <div className='flex  gap-[10px] w-[1130px] ml-[120px] mt-[40px] text-sm'>
            {
              collection.map((i)=>(
                
              <div className=''>
                <div><img src={i.collections}/></div>
                <div><h2 className=''>{i.ctext}</h2></div>
                <div><h2 className=''>{i.crate}</h2></div>
                </div>
                
              )) 
            }
           </div>

    </>
  )
}

export default Singlepage

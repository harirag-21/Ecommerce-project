import React, { useState } from 'react';
import rectangle from "../Assets/Rectangle 3605.png";
import men1 from "../Assets/Rectangle 3635 (3).png";
import trash from "../Assets/bin_icon.png"

function Cart() {
  const mimage = [
    {
      menimages: men1,
      mtext: "Men Round Neck Pure Cotton T-shirt",
      mrate:"$149"
    },
    {
      menimages: men1,
      mtext: "Men Round Neck Pure Cotton T-shirt",
            mrate:"$149"
    }
  ]
//   const sizes=[{
//     size:"S"
//   }
// ]

  return (
    
    <div>
      {/* Header Section */}
      <div className='flex mt-[20px]'>
        <div>
          <h2 className='mt-[20px] ml-[66px] font-medium text-2xl'>YOUR CART</h2>
        </div>
        <div>
          <img src={rectangle} alt='rectangle' className='mt-[40px] ml-[10px]' />
        </div>
      </div>

<div className='mt-[20px] border border-[#ADADAD] w-[1200px] h-[1px] ml-[66px]'></div>

<div className='ml-[66px] flex flex-col gap-[20px]'>
  {
    mimage.map((i)=>(
      <>
      <div className='flex mt-[20px] '>
        
        <img src={i.menimages}/>
        
      <h2 className='flex ml-[23px]'>{i.mtext}</h2>
       <div className='mt-[50px] ml-[-260px]'><h2>{i.mrate}</h2></div>
       <div><button type='text' className='w-[30px] h-[30px] border border-black mt-[50px] ml-[20px]'>L</button></div>
       
<input type='number' className='ml-[150px] border w-[100px] h-[30px] mt-[50px]'/>
<div><img src={trash} alt='delete' className='w-[20px] ml-[700px] mt-[30px]'/></div>
      
      </div>
      <div className='mt-[20px] border border-[#ADADAD] w-[1200px] h-[1px] '></div>  
    </>
    ))
  }
<div className='flex ml-[850px] text-[20px] mt-[20px]'>
<div className=''>CART</div>
<div className='font-bold ml-[5px]'>TOTALS</div>
<div><img src={rectangle} className='mt-[10px] ml-[10px]' alt='rectangle'/></div>
</div>
<div className='flex ml-[850px]'>
<div className=''>Subtotal</div>
<div className='ml-[250px]'>$60.00</div>
</div>
 <div className=' ml-[850px]  border border-[#ADADAD] w-[360px] h-[1px] '></div>  

<div className='flex ml-[850px]'>
<div className=''>Shipping Free</div>
<div className='ml-[230px]'>$10</div>
</div>
 <div className=' ml-[850px]  border border-[#ADADAD] w-[360px] h-[1px] '></div>  


<div className='flex ml-[850px]'>
<div className=''>Total</div>
<div className='ml-[280px]'>$70.00</div>
</div>
 <div className=' ml-[850px]  border border-[#ADADAD] w-[360px] h-[1px] '></div>  

<div><button type='submit' className='border-2 border-black bg-black text-white  w-[250px] h-[40px] ml-[960px]'>PROCEED TO CHECKOUT</button></div></div>
      

</div>
//  {/* <div className="flex gap-[10px] ">
//     {
//       sizes.map((i)=>(
//       <label>
//     <input type="radio" value="S" name="size" className="hidden peer" />
//     <span class=" w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md  peer-checked:border-orange-200 peer-checked:text-black text-lg">{i.size}</span></label>
//       ))
//     }
    
// </div> */}
  
  );
}

export default Cart;

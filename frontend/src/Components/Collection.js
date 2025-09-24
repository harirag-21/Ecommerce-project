import React from 'react'
import rectangle from "../Assets/Rectangle 3605.png"
import dress from "../Assets/Rectangle 3608.png"
import dress2 from "../Assets/Rectangle 3611.png"
import dress3 from "../Assets/Rectangle 3619.png"
import dress4 from "../Assets/Rectangle 3609.png"
import dress5 from "../Assets/Rectangle 3635.png"
import dress6 from "../Assets/Rectangle 3634.png"
import dress7 from "../Assets/Rectangle 3617.png"
import dress8 from "../Assets/Rectangle 3616.png"
import dress9 from "../Assets/Rectangle 3613.png"
import dress10 from "../Assets/Rectangle 3615.png"
import dress11 from "../Assets/Rectangle 3627.png"
import dress12 from "../Assets/Rectangle 3626.png"
import exchange from "../Assets/exchange_icon (1).png"
import return2 from "../Assets/quality_icon (1).png"
import return3 from "../Assets/support_img (1).png"


function Collection() {
  return (
    
    <div>
    <div className='flex'>
           <div><h2 className='mt-[20px] ml-[578PX] font-medium text-2xl'>LATEST COLLECTIONS</h2></div>
          <div><img src={rectangle} alt='rectangle' className='mt-[30px] ml-[10px]'/></div>
        </div>
          <div className='ml-[330px] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</div>

          <div className='grid grid-cols-5 gap-[10px] w-[1130px] ml-[120px] mt-[40px] text-sm'>
            <div><img src={dress}  alt='dress'/>Women Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress2}  alt='dress2'/>Men Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress3}  alt='dress3'/>Men Round Neck  Cotton T-shirt <br/>$149</div>
            <div><img src={dress4}  alt='dress4'/>men Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress5}  alt='dress5'/>WoMen Round Neck Cotton Top </div>
          </div>

     <div className='grid grid-cols-5 gap-[10px] w-[1130px] ml-[120px] mt-[40px] text-sm'>
            <div><img src={dress6}  alt='dress6'/>Men Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress7}  alt='dress7'/>Men Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress8}  alt='dress8'/>Men Round Neck  Cotton T-shirt <br/>$149</div>
            <div><img src={dress9}  alt='dress9'/>Men Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress10}  alt='dress10'/>Women Round Neck Cotton Top <br/>$149</div>
          </div>

{/* best seller */}
<div className='flex gap-[10px] ml-[598px] font-medium text-2xl mt-[20px]' >
<div><h2 className=''>BEST</h2></div>
<div><h2 className='font-bold'>SELLER</h2></div>
    <div><img src={rectangle} alt='rectangle' className='mt-[15px] ml-[10px]'/></div>
</div>
<div className='ml-[330px] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</div>      



<div className='grid grid-cols-5 gap-[10px] w-[1130px] ml-[120px] mt-[40px] text-sm'>
            <div><img src={dress}  alt='dress'/>men Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress11}  alt='dress11'/>Men Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress12}  alt='dress12'/>Women Round Neck  Cotton T-shirt <br/>$149</div>
            <div><img src={dress2}  alt='dress2'/>men Round Neck Cotton Top <br/>$149</div>
            <div><img src={dress5}  alt='dress5'/>WoMen Round Neck Cotton Top <br/>$149</div>
          </div>
          

<div className='flex  mt-[100px] ml-[100px]'>
  <div>
  <div><img src={exchange} className='ml-[200px]' alt='exchange'/></div>
  <div className='ml-[150px] text-sm font-bold '>Easy Exchange Policy</div>
  <div className='ml-[110px]'>We offer hassle free  exchange policy</div>
    </div>

<div>
  <div><img src={return2} className='ml-[200px]' alt='return2'/></div>
  <div className='ml-[150px] text-sm font-bold '>7 Days Return Policy</div>
  <div className='ml-[110px]'>We provide 7 days free return policy </div>
</div>

<div>
  <div><img src={return3} className='ml-[200px]' alt='return3'/></div>
  <div className='ml-[150px] text-sm font-bold '>Best Customer Support</div>
  <div className='ml-[110px]'>We provide 24/7 customer support</div>
</div>
</div>
</div>
  )
}

export default Collection

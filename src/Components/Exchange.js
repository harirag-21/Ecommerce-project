import React from 'react'
import exchange from "../Assets/exchange_icon (1).png"
import return2 from "../Assets/quality_icon (1).png"
import return3 from "../Assets/support_img (1).png"
import Subscribe from './Subscribe'
function Exchange() {
  return (
    <div>
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
<Subscribe/>
</div>
    
  )
}

export default Exchange

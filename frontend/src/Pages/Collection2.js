import React from 'react'
import rectangle from "../Assets/Rectangle 3605.png"
import first from "../Assets/p_img1.png"
import second from "../Assets/p_img2.png"
import third  from "../Assets/p_img3 (1).png"
import fourth from "../Assets/p_img4.png"
import fifth from "../Assets/p_img5.png"
import sixth from "../Assets/p_img6.png"
import seventh from "../Assets/p_img7.png"
import eight from "../Assets/p_img8.png"
import nine from "../Assets/p_img9.png"
import i10 from "../Assets/p_img10.png"
import i11 from "../Assets/p_img11.png"
import i12 from "../Assets/p_img12.png"
import i13 from "../Assets/p_img13.png"
import i14 from "../Assets/p_img14.png"
import i15 from "../Assets/p_img15.png"
import i16 from "../Assets/p_img16.png"
import i17 from "../Assets/p_img17.png"
import i18 from "../Assets/p_img18.png"
import i19 from "../Assets/p_img19.png"
import i20 from "../Assets/p_img20.png"
import i21 from "../Assets/p_img21.png"
import i22 from "../Assets/p_img22.png"
import i23 from "../Assets/p_img23.png"
import i24 from "../Assets/p_img24.png"
import i25 from "../Assets/p_img25.png"
// import i26 from "../Assets/p_img26.png"
import i27 from "../Assets/p_img27.png"
import i28 from "../Assets/p_img28.png"
import i29 from "../Assets/p_img29.png"
import i30 from "../Assets/p_img30.png"
import i31 from "../Assets/p_img40.png"
import i32 from "../Assets/p_img43.png"
import i33 from "../Assets/p_img48.png"
function Collection2() {
  const colimage=[{
    image:first,
    ctext:"Women Round Neck Cotton Top",
    crate:"$149"
  },{
    image:second,
    ctext:"Men Neck Cotton T-shirt",
    crate:"$149"
  },{
     image:third,
    ctext:"Girls Neck Cotton Top",
    crate:"$149"
  },{
       image:fourth,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
    
       image:fifth,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
    image:sixth,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
    image:seventh,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
  image:eight,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:nine,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i10,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i11,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i12,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i13,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i14,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i15,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i16,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i17,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i18,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i19,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i20,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i21,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i22,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i23,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i24,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
         image:i25,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  // },{
  //    image:i26,
  //   ctext:"Men Neck Cotton Top",
  //   crate:"$149"
  },{
     image:i27,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i28,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i29,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
 image:i30,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i31,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i32,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  },{
     image:i33,
    ctext:"Men Neck Cotton Top",
    crate:"$149"
  }
]
  return (
    <div>

    <div className='border border-#ADADAD w-[1200px] h-[1px] ml-[66px]'></div>

<div className='flex ml-[430px] mt-[70px] gap-[10px] text-[25px]'>
  <div><h2>ALL</h2></div>
  <div className='font-bold'><h2>COLLECTIONS</h2></div>
  <div><img src={rectangle} alt='rectangle' className='mt-[30px] ml-[10px]'/></div>
</div>

 <div className='ml-[960px]'>
  <select className=''><option value="low">Sort by: Price: Low To Low</option>
<option value="high">Sort by: Price: Low To High</option>
    </select> 
 </div>

 
<div className='flex gap-[30px]'>
<div>
    <div className=' text-[25px] ml-[66px]'>FILTERS</div>
    <div className='border border-black w-[245px] h-[179px] ml-[56px] mt-[15px]'>
      <div className='ml-[30px] mt-[10px]'>CATEGORIES</div>

      <div className=' gap-[10px] mt-[20px]'>
      <div className='ml-[30px]'><input type='checkbox' className='w-[20px] h-[20px] mr-3 mt-[10px] '/>Men</div>
      <div className='ml-[30px]'><input type='checkbox' className='w-[20px] h-[20px] mr-3 mt-[10px]'/>Women</div>
      <div className='ml-[30px]'><input type='checkbox' className='w-[20px] h-[20px] mr-3  mt-[10px]'/>Kids</div>
      </div>
</div>
    
    <div className='border border-black w-[245px] h-[179px] ml-[56px] mt-[30px]'>
      <div className='ml-[30px] mt-[10px]'>TYPE</div>

       <div className=' gap-[10px] mt-[20px]'>
      <div className='ml-[30px]'><input type='checkbox' className='w-[20px] h-[20px] mr-3 mt-[10px] '/>Topwear</div>
      <div className='ml-[30px]'><input type='checkbox' className='w-[20px] h-[20px] mr-3 mt-[10px]'/>Bottomwear</div>
      <div className='ml-[30px]'><input type='checkbox' className='w-[20px] h-[20px] mr-3  mt-[10px]'/>Winterwear</div>
      </div>
    </div>
    </div>
    <div className='mt-[50px] grid grid-cols-4 gap-[20px]'>
      {
        
        colimage.map((i)=>(
          <div>
          <div><img src={i.image}/> </div>
         <div><h2 className='text-sm'>{i.ctext} </h2> </div>
           <div><h2 className='text-sm'>{i.crate} </h2> </div>
         </div>
        ))
        
      }

    </div>
 </div>
 </div>
  )
}

export default Collection2

import React from 'react'
import rectangle from "../Assets/Rectangle 3605.png"
// import dress from "../Assets/Rectangle 3608.png"
// import dress2 from "../Assets/Rectangle 3611.png"
// import dress3 from "../Assets/Rectangle 3619.png"
// import dress4 from "../Assets/Rectangle 3609.png"
// import dress5 from "../Assets/Rectangle 3635.png"
// import dress6 from "../Assets/Rectangle 3634.png"
// import dress7 from "../Assets/Rectangle 3617.png"
// import dress8 from "../Assets/Rectangle 3616.png"
// import dress9 from "../Assets/Rectangle 3613.png"
// import dress10 from "../Assets/Rectangle 3615.png"
// import dress11 from "../Assets/Rectangle 3627.png"
// import dress12 from "../Assets/Rectangle 3626.png"
import {Link} from "react-router-dom"
import {useContext} from 'react';
import { ShopContext } from './Context/ShopContext';
function FeatureCollection({limit,title,hideDescription}) {
    const {products}=useContext(ShopContext)
// const collection=[{
//     collections:dress,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//       collections:dress2,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//       collections:dress3,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//       collections:dress4,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//   collections:dress5,
//     ctext:"Women Round Neck Cotton Top",
//     crate:"$149"
//   },{
//   collections:dress6,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//       collections:dress7,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//     collections:dress8,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//       collections:dress9,
//     ctext:"Women Round Neck Cotton Top",
//     crate:"$149"
//   },{
//       collections:dress10,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//       collections:dress11,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
//   },{
//       collections:dress12,
//     ctext:"Women Round Neck Cotton Top" ,
//     crate:"$149"
  
//   }]
  const displaycollection=limit? products.slice(0,limit):products
  return (
    
    <div>
    <div className='flex'>
           <div><h2 className='mt-[20px] ml-[578PX] font-medium text-2xl'>{title}</h2></div>
          <div><img src={rectangle} alt='rectangle' className='mt-[30px] ml-[10px]'/></div>
        </div>
          {
            (!hideDescription &&
              <div className='ml-[330px] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</div>
            )
          }

          <div className='grid grid-cols-5 gap-[10px] w-[1130px] ml-[120px] mt-[40px] text-sm'>
            {
              displaycollection.map((i)=>(
                <>
                <div>
                <Link to={"/Singlepage"}><img src={i.image} alt='w' /></Link>
                <div><h2 className=''>{i.name}</h2></div>
                <div><h2 className=''>{i.price}</h2></div>
</div>
                </>
              ))
              
            }
</div>
            </div> 
  ) 
}

export default FeatureCollection

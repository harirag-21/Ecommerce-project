import React from 'react'
import rectangle from "../Assets/Rectangle 3605.png"
import about from "../Assets/about_img.png"
import Subscribe from '../Components/Subscribe'
function About() {
  return (
    <div>
<div className='flex ml-[570px] mt-[70px] gap-[10px] text-[25px]'>
  <div><h2>ABOUT</h2></div>
  <div className='font-bold'><h2>US</h2></div>
  <div><img src={rectangle} alt='rectangle' className='mt-[30px] ml-[10px]'/></div>
</div>
<div className='flex'>
<div><img src={about} className='mt-[36px] ml-[66px] w-[500px]' alt='about'/></div>
<p className='text-sm ml-[100px] mt-[150px]'>
Forever was born out of a passion for innovation and a desire to revolutionize the way <br/> people shop online. Our journey began with a simple idea: to provide a platform where<br/> customers can easily discover, explore, and purchase a wide range of products from <br/> the comfort of their homes. <br/><br/>Since our inception, we've worked tirelessly to curate a diverse selection of high-<br/>quality products that cater to every taste and preference. From fashion and beauty to <br/> electronics and home essentials, we offer an extensive collection sourced from trusted <br/>brands and suppliers.<br/><br/><h2 className='font-bold'>Our Mission</h2><br/>Our mission at Forever is to empower customers with choice, convenience, and <br/>confidence. We're dedicated to providing a seamless shopping experience that exceeds <br/> expectations, from browsing and ordering to delivery and beyond. </p>

</div>
<div className='flex ml-[66px] mt-[89px] text-[20px] gap-[10px]'>
    <div><h2>WHY</h2></div>
    <div><h2 className='font-bold'>CHOOSE US</h2></div>
    <div><img src={rectangle} className='mt-[10px]' alt='rectangle'/></div>
</div>
<div className='flex ml-[66px] mt-[20px]'>
<div className='border border-black w-[400px] h-[260px]'>
<h2 className='ml-[77px] mt-[60px] font-bold'>QUALITY ASSURANCE:</h2>
<p className='ml-[77px] mt-[20px]'>We meticulously select and vet each <br/>product to ensure it meets our <br/> stringent quality standards.</p>
</div>
<div className='border border-black w-[400px] h-[260px]'>
    <h2 className='ml-[77px] mt-[60px] font-bold'>CONVENIENCE:</h2>
<p className='ml-[77px] mt-[20px]'>With our user-friendly interface and <br/>hassle-free ordering process, <br/> shopping has never been easier.</p>
</div>
<div className='border border-black w-[400px] h-[260px]'>
<h2 className='ml-[77px] mt-[60px] font-bold'>EXCEPTIONAL CUSTOMER SERVICE:</h2>
<p className='ml-[77px] mt-[20px]'>Our team of dedicated professionals is <br/>here to assist you the way, ensuring your  <br/>satisfaction is our top priority.</p>
</div>
</div>
<Subscribe/>
</div>
  )
}

export default About

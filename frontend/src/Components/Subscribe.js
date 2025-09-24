import React from 'react'


function Subscribe() {
  return (
    <div>
<div className='flex flex-col justify-center  items-center mt-[300px] gap-[10px]'>
      <div className='text-2xl'>Subscribe now & get 20% off</div>
<div className='text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div></div>
{/* <div className='flex space-x-6'>
<div><input type='email' name='email' placeholder='Enter your email' className='border-2 border-black h-[30px] w-[320px] ml-[440px]'/>
<button type='submit' className='bg-black w-[70px] h-[30px] text-white text-sm ml-[800px]'>SUBSCRIBE</button>
</div> */}

<div class="flex items-center space-x-2 ml-[440px] mt-[25px]">
  <input
    type="email"
    placeholder="Enter your email id "
    class="border border-gray-400 w-[380px] px-4 py-2 rounded "
  />
  <button
    type="submit"
    class="bg-black text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    Subscribe
  </button>
</div>

</div>




  )
}

export default Subscribe

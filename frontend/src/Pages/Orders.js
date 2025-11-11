import React, { useContext } from 'react';
import rectangle from "../Assets/Rectangle 3605.png";
import { ShopContext } from '../Components/Context/ShopContext';

function Orders() {
  const { cart } = useContext(ShopContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div>
      {/* Header Section */}
      <div className='flex mt-[20px]'>
        <div>
          <h2 className='mt-[20px] ml-[66px] font-medium text-2xl'>MY ORDERS</h2>
        </div>
        <div>
          <img src={rectangle} alt='rectangle' className='mt-[40px] ml-[10px]' />
        </div>
      </div>

      <div className='mt-[20px] border border-[#ADADAD] w-[1200px] h-[1px] ml-[66px]'></div>

      <div className='ml-[66px] flex flex-col gap-[20px]'>

        {/* If cart is empty */}
        {cart.length === 0 ? (
          <div className='text-center text-gray-500 mt-10 text-lg'>Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className='w-[1200px] border-b border-[#ADADAD] pb-[20px]'>

              {/* Order ID and Order Placed in one flex */}
              <div className='flex justify-between items-start mt-[20px]'>
                <h2 className="font-medium text-medium">Order ID: #{item.id}</h2>
                <h2 className="text-green-600 font-medium text-lg">Order Placed</h2>
              </div>

              {/* Product Details Section */}
              <div className='flex mt-[10px] items-start justify-between'>
                {/* Left: Image and Product Info */}
                <div className='flex items-start gap-[10px]'>
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-[120px] h-[120px] object-cover'
                  />

                  {/* Product Info */}
                  <div>
                    <h2 className='font-medium text-[18px]'>{item.name}</h2>
                    <p className='text-gray-600 mt-[5px]'>Qty: {item.quantity}</p>

                    {/* Divider and Size */}
                    <div className='mt-[8px] border border-[#ADADAD] w-[200px] h-[1px]'></div>
                    <p className='mt-[5px] text-gray-700'>Size: {item.size}</p>
                  </div>
                </div>

                {/* Right: Price + Total */}
                <div className='text-right mr-[20px]'>
                  <h2 className="font-medium text-[16px] mt-[30px]">${item.price.toFixed(2)}</h2>
                  <h2 className="font-semibold text-[16px] mt-[50px]">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </h2>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;

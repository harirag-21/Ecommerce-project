import React, { useContext } from 'react';
import rectangle from "../Assets/Rectangle 3605.png";
import trash from "../Assets/bin_icon.png";
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Components/Context/ShopContext';

function Cart() {
  const { cart, updateCartItem, removeFromCart } = useContext(ShopContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;
  const navigate=useNavigate()

   const handleProceed=()=>{
      navigate('/delivery')
    }

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

        {/* If cart is empty */}
        {cart.length === 0 ? (
          <div className='text-center text-gray-500 mt-10 text-lg'>Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <div className='flex items-center mt-[20px] relative'>

                {/* Product Image */}
                <img src={item.image} alt={item.name} className='w-[120px] h-[120px] object-cover' />

                {/* Product Name */}
                <h2 className='ml-[23px] w-[250px] font-medium'>{item.name}</h2>

                {/* Price */}
                <div className='absolute left-[500px] top-[50%] transform -translate-y-1/2'>
                  <h2 className='text-[16px] font-medium'>${item.price}</h2>
                </div>

                {/* Size Button */}
                <button
                  type='text'
                  className='w-[35px] h-[35px] border border-black ml-[200px] text-[15px] mt-[5px]'
                >
                  {item.size}
                </button>

                {/* Quantity Input */}
                <input
                  type='number'
                  min='1'
                  className='ml-[60px] border border-gray-400 w-[90px] h-[35px] text-center'
                  value={item.quantity}
                  onChange={(e) => {
                    const value = Math.max(1, parseInt(e.target.value) || 1);
                    updateCartItem(item.id, value);
                  }}
                />

                {/* Trash Icon */}
                <img
                  src={trash}
                  alt='delete'
                  className='w-[25px] ml-[100px] cursor-pointer hover:opacity-70'
                  onClick={() => removeFromCart(item.id)}
                />
              </div>

              {/* Divider Line */}
              <div className='mt-[20px] border border-[#ADADAD] w-[1200px] h-[1px]'></div>
            </div>
          ))
        )}

        {/* Totals Section */}
        {cart.length > 0 && (
          <>
            <div className='flex ml-[850px] text-[20px] mt-[20px]'>
              <div>CART</div>
              <div className='font-bold ml-[5px]'>TOTALS</div>
              <div>
                <img src={rectangle} className='mt-[10px] ml-[10px]' alt='rectangle' />
              </div>
            </div>

            <div className='flex ml-[850px]'>
              <div>Subtotal</div>
              <div className='ml-[250px]'>${subtotal.toFixed(2)}</div>
            </div>
            <div className='ml-[850px] border border-[#ADADAD] w-[360px] h-[1px]'></div>

            <div className='flex ml-[850px]'>
              <div>Shipping Free</div>
              <div className='ml-[230px]'>${shipping}</div>
            </div>
            <div className='ml-[850px] border border-[#ADADAD] w-[360px] h-[1px]'></div>

            <div className='flex ml-[850px]'>
              <div>Total</div>
              <div className='ml-[280px]'>${total.toFixed(2)}</div>
            </div>
            <div className='ml-[850px] border border-[#ADADAD] w-[360px] h-[1px]'></div>

            <div>
              <button
                type='button'
                onClick={handleProceed}
                className='border-2 border-black bg-black text-white w-[250px] h-[40px] ml-[960px]'
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Cart;

import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Components/Context/ShopContext';
import FeatureCollection from '../Components/FeatureCollection';

function Singlepage() {
  const { products, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);

  const product = products.find((item) => item._id === id);

  if (!product) {
    return <div className="ml-[66px] mt-[50px]">Loading product...</div>;
  }

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image[0], // main image
      size: selectedSize,
      quantity: 1,
    });

    navigate('/cart');
  };

  return (
    <>
      <div className='flex gap-[10px] mt-[51px]'>
        <div className='grid gap-[10px] ml-[66px]'>
          {product.image?.slice(0, 5).map((img, index) => (
            <div key={index}>
              <img src={img} alt={`product-${index}`} className="w-[80px] h-[80px] object-cover cursor-pointer" />
            </div>
          ))}
        </div>

        <div>
          <img src={product.image[0]} className='w-[450px]' alt='big' />
        </div>

        <div className='flex flex-col ml-[20px]'>
          <p className='text-[25px]'>{product.name}</p>
          <h2 className='text-[25px] mt-[10px]'>${product.price}</h2>
          <h2 className='text-sm mt-[10px]'>{product.description}</h2>
          <h2 className='mt-[10px]'>Select Size.</h2>

          <div className="flex gap-[10px] mt-[20px]">
            {sizes.map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  value={size}
                  name="size"
                  className="hidden peer"
                  onChange={() => setSelectedSize(size)}
                />
                <span className="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-md peer-checked:border-orange-200 peer-checked:text-black text-lg">
                  {size}
                </span>
              </label>
            ))}
          </div>

          <button
            type='submit'
            className='bg-black w-[150px] h-[50px] text-white mt-[30px]'
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          <div className='border border-black w-[400px] mt-[20px]'></div>

          <div className='text-sm mt-[20px]'>
            <div>100% Original product.</div>
            <div className='mt-[10px]'>Cash on delivery is available on this product.</div>
            <div className='mt-[10px]'>Easy return and exchange policy within 7 days.</div>
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

      <FeatureCollection title="RELATED PRODUCTS" limit={5} hideDescription={true} />
    </>
  );
}

export default Singlepage;

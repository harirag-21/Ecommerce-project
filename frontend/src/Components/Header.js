import React, { useState, useRef, useEffect, useContext } from 'react';
import logo from "../Assets/logo.png";
import search from "../Assets/search icon.png";
import profile from "../Assets/profile-icon.png";
import vector from "../Assets/Vector.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Components/Context/ShopContext'; // 👈 import context

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const { cart } = useContext(ShopContext); // 👈 get cart from context

  // Calculate total quantity
  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      setIsOpen(!isOpen);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <>
      <div className='flex ml-[66px] mt-[29px]'>
        <div><img src={logo} alt='logo'/></div>

        <div className='flex ml-[264px] mt-[8px] gap-[22px] text-lg'>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/collection">COLLECTION</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <a href='http://localhost:3001'>
            <div><button type='submit' className='pb-[10px]'>ADMIN</button></div>
          </a>
        </div>

        <div className='flex gap-[22px] ml-[240px] items-center'>
          <NavLink to='/singlepage'><img src={search} alt='search'/></NavLink>

          <div className="relative" ref={dropdownRef}>
            <img
              src={profile}
              alt="profile"
              className="cursor-pointer"
              onClick={handleProfileClick}
            />
            {isLoggedIn && isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-md z-50">
                <NavLink
                  to="/order"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Orders
                </NavLink>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart icon with badge */}
          <div className="relative">
            <NavLink to='/Cart'>
              <img src={vector} alt='vector'/>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      <div className='border border-[#ADADAD] w-[1200px] h-[1px] ml-[66px]'></div>
    </>
  );
}

export default Header;

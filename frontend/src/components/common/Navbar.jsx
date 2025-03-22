import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Zelbi.png'; // Adjust path if needed

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-16 bg-[#050505] text-white flex items-center justify-center z-50">
      <div className="w-11/12 flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="group flex items-center">
          <img
            src={logo}
            alt="Zelbi Logo"
            width={120}
            height={31}
            loading="lazy"
            className=" group-hover:brightness-200 ml-[83px]"
          />
        </Link>

        {/* Auth Buttons */}
        <div className="flex gap-x-6 mr-[81px] items-center">
          <Link to="/ai" className="hover:underline">
            <span className='text-white text-[13px]'>AI</span>
          </Link>
          <Link to="/blog" className="hover:underline">
            <span className='text-white text-[13px]'>BLOGS</span>
          </Link>
          <Link to="/signup" className="hover:underline">
            <button className='border border-pure-greys-600 text-[12px] p-3 py-2'>
              TRADE NOW
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
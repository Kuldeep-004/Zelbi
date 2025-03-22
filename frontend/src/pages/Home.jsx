import React from 'react';
import img from '../assets/Zelbi.png';
import img1 from '../assets/screen.png';
import { Link } from 'react-router-dom';
import img2 from '../assets/texture.png';
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import Card from '../components/Card';

const Home = () => {
  return (
    <div className=' scrollbar-hide'>
      <div className='flex flex-col w-full h-fit mt-[80px] bg-black'>
        <div className='fixed left-[183px] bg-cover bg-center z-0'>
          <img src={img} className='w-[1506px] h-[280px] mx-auto' />
          <div className='flex justify-between text-sm'>
            <div className='text-white mt-3 font-edu-sa tracking-tighter'>AI ENHANCED TRADING</div>
            <div className='text-white mt-3 font-edu-sa tracking-tighter'>PREDICT TOP COURSES</div>
          </div>
          <div className='flex justify-end'>
            <div className='text-[#3affa3] mt-3 text-sm font-extrabold tracking-tight'>$ 11 232 195 873</div>
          </div>
        </div>

        <div className='mt-[250px]'>
          <img src={img1} className='mx-auto relative w-[1030px] h-[700px] z-40' />
        </div>
        <Link className='flex justify-center mt-10 relative' to='/trade'>
          <button className='text-black bg-[#3affa3] rounded-md p-4 font-semibold py-2 relative z-40 text-[11px]'>TRADE NOW</button>
        </Link>
      </div>
      <div className='w-screen relative text-white h-full bg-black z-40'>
        <img src={img2} className='w-screen h-[500px] absolute brightness-90' />
        <div className='flex w-full justify-end pt-[200px] pr-[220px] bg-center bg-cover '>
          <div className='relative flex max-w-[700px] text-[24px] tracking-tighter'> 
            <div className='bg-[#3affa3] absolute w-[4px] left-[1px] h-6'></div>
            <span className='leading-none'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AT ZELBI, OUR MISSION IS TO MAKE THE COMPLEX WORLD OF BLOCKCHAIN SIMPLE AND INTUITIVE. CRYPTO EXCHANGE WITH AI-POWERED TRADING TOOLS TO HELP TRADERS MAKE THE BEST DATA-DRIVEN DECISIONS.
            </span>
          </div>
        </div>
      </div>

          <div className="bg-white relative z-40 min-h-screen flex flex-col items-center pt-28">
          {/* Heading Section (Texts Closer Horizontally) */}
          <div className="w-full px-20 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-black whitespace-nowrap ml-40">
              EVOLVE WITH US
            </h1>
            <p className="text-black text-right max-w-md font-medium border-t-4 border-green-400 leading-tight pl-5 mr-10">
              JOIN OUR COMMUNITY TO STAY UP TO DATE WITH THE LATEST NEWS AND ENJOY FREE EDUCATIONAL TRADING RESOURCES.
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex gap-10 mt-32 relative z-50">
            <Card title="YOUTUBE" count="39K" Icon={FaXTwitter} />
            <Card title="TELEGRAM" count="102K" Icon={FaTelegram} />
            <Card title="DISCORD" count="32K" Icon={FaDiscord} />
          </div>
        </div>

      <footer className='w-screen relative text-white bg-black z-40'>
        <div className='left-[104px] bg-cover bg-center z-0'>
          <img src={img} className='w-[1500px] h-[280px] mx-auto' />
        </div>
      </footer>
    </div>
  );
};

export default Home;
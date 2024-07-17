import React,{useEffect, useState} from 'react';
import {Fade, Slide} from 'react-reveal';
import {BiX} from 'react-icons/bi';
import {CiMenuFries} from 'react-icons/ci';
import {BsDownload} from 'react-icons/bs'
import {Link} from 'react-router-dom';

const NavItems = [
  {name: 'Home', path: '/'},
  {name: 'Project Catalogue', path: '/projects'},
  {name: 'My Tech Stacks', path: '/stacks'},
  //{name: 'Startups', path:'/startups'}
]

const NavItemsDesktop = [
  {name: 'Home', path: '/'},
  {name: 'Projects', path: '/projects'},
  {name: 'Stacks', path: '/stacks'},
  // {name: 'Startups', path:'/startups'}
]

function Navbar(props) {
    const [currentTextindex, setCurrentTextIndex] = useState(0);
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const texts = [
        "Somtochukwu✌💯",
        "Bryan✅",
        "Daniel🚀🚀",
    ];
    const updateCurrentTextIndex = () => {
        const newIndex = (currentTextindex + 1) % texts.length;
        setCurrentTextIndex(newIndex);
    }
    useEffect(() => {
        const intervalid = setInterval(updateCurrentTextIndex, 5000)
            return () => clearInterval(intervalid)
        }, [currentTextindex]);
        
    return (
        <div className="bg-[#10101a] z-10 top-0 text-white border-b flex justify-between relative b-4 border-white py-4 px-2 md:px-6 items-center">
                <Slide left>
                    <h2 className='text-2xl md:3xl lg:text-4xl  font-mono'>{texts[currentTextindex]}</h2>
                </Slide> 
               <div className='hidden lg:flex'>
                  <ul className='flex  gap-6 items-center'>
                   {NavItemsDesktop.map((navitem, idx) => (
                     <li key={idx} className='text-white font-medium text-2xl md:text-xl hover:text-yellow-300'>
                     <Link to={navitem.path}>{navitem.name}</Link>
                   </li>
                 </ul>
               </div>
                <div className={`w-10 h-10 p-2 justify-center items-center gap-2.5 flex lg:hidden 
             ${
              isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
            }`}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            >
           {isToggleOpen ? <BiX className='w-10 h-10 text-white text-bold'/> :  <CiMenuFries className='w-8 h-8 text-white'/>}
            </div>
            <ul
              className={`absolute top-0 left-0 z-[-1] h-screen w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-[#10101a]  pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 ${
                isToggleOpen
                  ? "visible  "
                  : "invisible "
              }`} 
            >
              {NavItems.map((navItem) => (
                <li className='flex items-stretch border-b-2 px-4 text-3xl py-4 md:py-2 border-white '>
                  <Link to={navItem.path} className='flex items-center gap-2 md:py-2 transition-colors duration-300 focus:text-yellow-400 focus:outline-none focus-visible:outline-none '>{navItem.name}</Link>
                </li>
              ))}
             
            </ul>
               
            </div>
        </div>
    );
}

export default Navbar;

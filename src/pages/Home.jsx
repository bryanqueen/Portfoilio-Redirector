import React from 'react';
import MyPhoto from '../asset/15.png';
import Navbar from '../components/Navbar';
import {Fade} from 'react-reveal';
import Socials from '../components/Socials';
import BgAnimations from '../components/BgAnimations';
 

function Home(props) {
    return (
        <div>
            <Navbar/>
        <div className='bg-[rgb(16,16,26)] h-screen mx-auto'>
            <div className=" flex flex-col md:flex-row md:space-x-5 text-white p-4 pt-20 md:pt-5 md:px-20">
                <Fade bottom >
                    <img src={MyPhoto} alt="My Photo" className='h-[10rem] w-[10rem] md:h-[12rem] md:w-[12rem] rounded-full object-contain mx-auto  ' />
                </Fade>    
                <div className='p-5 leading-8 md:leading-6.5 text-justify font-light'>
                    <h1 className='font-semibold text-2xl md:text-3xl text-center md:text-start'>Umeh Daniel</h1>
                    
                    <div className='text-gray-400 '>
                        <Fade bottom>
                        <p className='text-center py-1.5 md:text-left'>Hi👋, let me introduce myself </p>
                        <p className='py-1.5'>I am a Fullstack Developer. I started my developer career when i was almost in my final year in high school, because a good friend of mine introduced me to HTML.</p>
                        <p className='py-1.5'>Presently, i am into:
                        <ul className=''>
                            <li><span className='font-bold text-center'>-</span>Web Development</li>
                            <li><span className='font-bold text-center'>-</span>Mobile App Development</li>
                        </ul>
                        </p>
                        <p className='py-1.5'>Due to the emergence of <span className='text-white font-semibold'>web3</span>, i decided to delve into <span>Blockchain Development</span>, and it has been a very great experience</p>
                        </Fade>
            {/* Button */}
                        <div className='flex md:flex-row flex-col md:py-1.5 md:space-x-2 gap-2'>
                            <Fade right>
                                <button className='text-md font-thin border border-gray-400 bg-inherit p-3 px-6 md:p-2.5 lg:p-3  rounded-md lg:w-full'>
                                <a href='/' >View my portfolio</a>
                                </button>
                            </Fade>
                           <Fade left>
                            <button className='text-md font-mono font-semibold hover:border bg-yellow-300 hover:border-gray-400 hover:bg-inherit p-3 text-gray-800 rounded-md px-6 md:p-2.5 lg:p-3 lg:w-full hover:text-white'>
                                <a href='https://buymeacoffee.com/somtochukwG' >Buy me a coffee☕☕</a>
                                </button>
                           </Fade>
                         <Socials/>
                        </div>
                          
                    </div>
                </div>
            </div>
            
        </div>    
        </div>                        
    );
}

export default Home;

import React from 'react';
import Navbar from '../components/Navbar';
import {Fade} from 'react-reveal';
import Socials from '../components/Socials';

 

function Home(props) {
    return (
        <div>
            <Navbar/>
        <div className='bg-[rgb(16,16,26)] min-h-screen px-5 md:px-12'>
            <div className='items-center justify-center py-14'>
            <Fade bottom>
            <h2 className='text-white text-3xl md:text-5xl font-semibold leading-12 '>I am Daniel..... <br />A <span className='text-yellow-200'>Software Engineer</span></h2>
            </Fade>
            </div>
            {/* Button */}
                        <div className='flex md:flex-row flex-col md:py-1.5 gap-2 justify-center items-center pt-16 md:pt-24 '>
                            <Fade right>
                                <button className='text-md font-thin border border-gray-400 bg-inherit p-3 px-6 md:p-2.5 lg:p-3 w-72 rounded-md text-white'>
                                <a href='/projects'>View my Projects</a>
                                </button>
                            </Fade>
                           <Fade left>
                            <button className='text-md font-mono font-semibold hover:border bg-yellow-300 hover:border-gray-400 w-72 hover:bg-inherit p-3 text-gray-800 rounded-md px-6 md:p-2.5 lg:p-3  hover:text-white'>
                                <a href='https://buymeacoffee.com/somtochukwG' >Buy me a coffee☕☕</a>
                                </button>
                           </Fade>
                         <Socials/>
                        </div>
                          <Socials/>
                    </div>
                </div>
                            
    );
}

export default Home;

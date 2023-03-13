import React,{useEffect, useState} from 'react';
import {Fade, Slide} from 'react-reveal';


function Navbar(props) {
    const [currentTextindex, setCurrentTextIndex] = useState(0);
    const texts = [
        "Umeh😎👌",
        "Somtochukwu✌💯",
        "Daniel🚀🚀"
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
        <div className="bg-[#10101a] justify-center text-white ">
                <Slide right>
                    <h2 className='text-2xl md:3xl px-7 md:px-20 py-3 font-mono'>{texts[currentTextindex]}</h2>
                </Slide> 
        </div>
    );
}

export default Navbar;
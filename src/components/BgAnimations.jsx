import React from 'react';
import Lottie from 'lottie-react';
import Rocket from '../asset/45722-rocket-loader.json'


function BgAnimations(props) {
 
    return (
        <div className='bg-inherit h-[4rem] w-[4rem]'>
            <Lottie animationData={Rocket} loop={true}/>
        </div>
    );
}

export default BgAnimations;
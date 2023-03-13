import React from 'react';
import {BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsDiscord, BsTelegram} from 'react-icons/bs'

function Socials(props) {
    return (
        <div className="flex text-white space-x-4 py-5 md:py-3 justify-center">

            <a href="https://instagram.com/somto.eth" className='hover:text-yellow-300'>
                <BsInstagram className="h-6 w-6 "/>  
            </a>
           <a href="https://linkedin.com/in/somto-daniel-a486a21ba" className='hover:text-yellow-300'>
            <BsLinkedin className='h-6 w-6'/>
           </a>
           <a href="https://twitter.com/Rengoku_Ox" className='hover:text-yellow-300'>
                <BsTwitter className='h-6 w-6'/>
           </a>
           <a href="https://github.com/bryanqueen" className='hover:text-yellow-300'>
                <BsGithub className='h-6 w-6'/>
           </a>
           <a href="https://t.me/bryanQueen1" className='hover:text-yellow-300'>
                <BsTelegram className='h-6 w-6'/>
           </a>
           <a href='https://discordapp.com/users/955096997516419122' className='hover:text-yellow-300'>
                <BsDiscord className='h-6 w-6'/>
           </a>
        </div>
    );
}

export default Socials;
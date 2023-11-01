import React from 'react';

function StackCards({stackImage, stackName, stackType}) {
    return (
        <div className='flex flex-col gap-2 py-4 px-5 border-white border b-2 items-center rounded-3xl cursor-pointer'>
            <img src={stackImage} alt="stack image" className='w-24 h-24 object-contain md:w-36 md:h-36 rounded-2xl' />
            <h1 className='text-2xl text-white font-semibold'>{stackName}</h1>
            <h2 className='text-sm font-normal text-gray-300 '>{stackType}</h2>
        </div>
    );
}

export default StackCards;
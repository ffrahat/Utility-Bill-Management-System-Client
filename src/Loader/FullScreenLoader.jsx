import React from 'react';
import { PacmanLoader } from 'react-spinners';

const FullScreenLoader = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <PacmanLoader color="#2841C5" />
        </div>
    );
};

export default FullScreenLoader;
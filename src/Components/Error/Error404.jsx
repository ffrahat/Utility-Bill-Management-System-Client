import React from 'react';
import error404 from '../../assets/error-404.png'

const Error404 = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center p-5'>
            <img src={error404} alt="Error" />
        </div>
    );
};

export default Error404;
import React from 'react';

const MyContainar = ({children, className}) => {
    return (
        <div className={`container mx-auto my-5 md:my-10 px-5 py-10 md:p-10 ${className}`}>
            {children}
        </div>
    );
};

export default MyContainar;
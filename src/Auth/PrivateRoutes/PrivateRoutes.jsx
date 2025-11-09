import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router';



const PrivateRoutes = ({ children }) => {
    
    const { user } = useAuth();
    if (user && user.email) {
        return children;
    } else {
        return <Navigate to='/' />
    }

};

export default PrivateRoutes;
import React from 'react';
import MyContainar from '../Layouts/MyContainar';
import RealTimeNotification from '../Components/RealTimeNotification/RealTimeNotification';
import Categories from '../Components/Categories/Categories';
import SwipeHome from '../Components/SwiperHome/SwiperHome';
import Support from '../Components/Support/Support';

const Home = () => {
    return (
        <MyContainar>
            <SwipeHome />
            <Categories />
            <RealTimeNotification />
            <Support />
        </MyContainar>
    );
};

export default Home;
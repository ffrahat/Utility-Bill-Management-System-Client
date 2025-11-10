import React from 'react';
import MyContainar from '../Layouts/MyContainar';
import RealTimeNotification from '../Components/RealTimeNotification/RealTimeNotification';
import SwipeHome from '../Components/SwiperHome/SwiperHome';
import Support from '../Components/Support/Support';
import RecentBills from '../Components/RecentBills/RecentBills';



const Home = () => {
    return (
        <MyContainar>
            <SwipeHome />
            <RecentBills />
            <RealTimeNotification />
            <Support />
        </MyContainar>
    );
};

export default Home;
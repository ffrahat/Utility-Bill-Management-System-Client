import React from 'react';
import MyContainar from '../Layouts/MyContainar';
import RealTimeNotification from '../Components/RealTimeNotification/RealTimeNotification';
import Categories from '../Components/Categories/Categories';
import SwipeHome from '../Components/SwiperHome/SwiperHome';
import Support from '../Components/Support/Support';
import RecentBills from '../Components/RecentBills/RecentBills';



const Home = () => {
    return (
        <MyContainar>
            <SwipeHome />
            <Categories />
            <RecentBills />
            <RealTimeNotification />
            <Support />
        </MyContainar>
    );
};

export default Home;
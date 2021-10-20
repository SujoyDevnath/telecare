import React from 'react';
import HappyClients from '../HappyClients/HappyClients';
import Ratings from '../Ratings/Ratings';
import Slider from '../Slider/Slider';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopServices></TopServices>
            <Ratings></Ratings>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;
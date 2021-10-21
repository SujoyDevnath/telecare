import React from 'react';
import Ratings from '../Ratings/Ratings';
import Slider from '../Slider/Slider';
import TopDoctors from '../TopDoctors/TopDoctors';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopServices></TopServices>
            <TopDoctors></TopDoctors>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;
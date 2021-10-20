import React from 'react';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';
import about from '../../../../images/about.jpeg'
import './About.css'

const About = () => {
    return (
        <div>
            <header>
                <div className="about" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${about})` }}>
                    <h1 className="about-heading">ABOUT</h1>
                </div>
            </header>
            <OurTeam></OurTeam>
            <Faq></Faq>
        </div>
    );
};

export default About;
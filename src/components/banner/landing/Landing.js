import React from 'react';
import About from './about/About';
import Services from './services/Services';
import Goals from './goal/Goals';
import Banner from '../Banner';
import Work from './work/Work';
import FAQ from './FAQ/FAQ';
import Plans from './plan/Plans';
import Testimonial from './testimonial/Testimonial';

const Landing = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
            <Goals></Goals>
            <Plans></Plans>
            <About></About>
            <Testimonial></Testimonial>
            <FAQ></FAQ>
        </div>
    );
};

export default Landing;
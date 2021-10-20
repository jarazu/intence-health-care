import React from 'react';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';
import Certificates from '../Certificates/Certificates';
import HowWorks from '../HowWorks/HowWorks';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services></Services>
            <HowWorks/>
            <Certificates/>
        </div>
    );
};

export default Home;
import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedDoctors from '../components/FeaturedDoctors';

export default function Home(){
    return (
    <>
        <Hero>
            <Banner title="get your dentist" subtitle="find your doctor on a click">
                <Link to="/doctors" className="btn-primary">
                    our dentists
                </Link>

            </Banner>
        </Hero>
        <Services />   
        <FeaturedDoctors />  
    </>
        
    )
};
import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import DoctorContainer from '../components/DoctorContainer';

export default function Dentists() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our dentists">
            <Link to="/" className="btn-primary">back to home</Link>
        </Banner>
      </Hero>
      <DoctorContainer>
      </DoctorContainer>
      
    </>
  )
}




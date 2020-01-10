import React, { Component } from 'react';
import {DoctorContext} from '../context';
import Loading from "./Loading";
import Doctor  from "./Doctor";
import Title from "./Titles";

export default class FeaturedDoctors extends Component {
    static contextType = DoctorContext;
    render() {
      let { loading, featuredDoctors : doctors } = this.context;
    doctors = doctors.map(doctor => {
        return <Doctor key={doctor.id} doctor={doctor}/>
    });

        return (
        <section className="featured-doctors"> 
        <Title title="Featured this month"/>
        <div className="featured-doctors-center">
            {loading ? <Loading /> : doctors}
        </div>
        
        </section>
        );
    }
}

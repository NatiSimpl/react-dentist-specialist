import React, { Component } from 'react'
import defaultBCg from '../images/gif/loading-arrow.gif'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {DoctorContext} from '../context'
import StyledHero from '../components/StyledHero';


export default class SingleDoctor extends Component {
  constructor(props){
    super(props)
   // console.log(this.props)
  this.state = {
    slug:this.props.match.params.slug,
    defaultBCg
  };
}
static contextType = DoctorContext;
// componentDidMount(){}


    render() {
      const {getDoctor, paymentTypes, acceptedServices} = this.context;
      const doctor = getDoctor(this.state.slug);
      if(!doctor){
        return<div className="error">
        <h3>no such room could be found...</h3>
          <Link to='/doctor' className="btn-primary">
            back to doctors
          </Link>
        </div>

      }

      const {id,name,type,description,clinicServices,images,email,phone,city,address,zipcode} = doctor;
      const [mainImg,...defaultImg] = images;
      console.log(doctor);

        return (
          <>
          <StyledHero img={mainImg || this.state.defaultBCg}>
            <Banner title = {`${name}`}>
              <Link to="/doctors" className="btn-primary">back to Dentists</Link>
            </Banner>
          </StyledHero>
        <section className="single-doctor">
        <div className="single-doctor-images">
          {defaultImg.map((item, index)=>{
            return <img key={index} src={item} alt={name}/>;
          })}
        </div>
        <div className="single-doctor-info">
          <article className="desc">
          <h3>{type}</h3>
          <h3>details</h3>
          <p>{description}</p>
          <br></br>
          <h3>clinical services</h3>
          <p>{clinicServices}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            {/* <h6>payment type:
            {paymentTypes[id-1].map((item) => { 
              return <div>-{item}</div>
            })}</h6> */}
            
            {/* <h6>accepted:
            {acceptedServices[id-1].map(item => { 
              return <div>-{item}</div>
            })}</h6> */}
            <h6>city: {city}</h6>
            <h6>address: {address}</h6>
            <h6>zipCode: {zipcode}</h6>
            <h6 id="email">Email: {email}</h6> 
            <h6>phone: +{phone}</h6>
            </article>
        </div>
     </section>
    </>
    );
  }
}
        {/* <section className="dentist-extras">
          <h6>extras:</h6>
            <ul className="extras">
            {extras.map((item,index)=>{
              return <li key={index}>- {item}</li>
            })}
            </ul>
        </section> 
{/* <h6>max capacity : {""} 
{capacity > 1 ? ` ${capacity} people `: ` ${capacity} person `}
</h6> */}
        
        
        
      
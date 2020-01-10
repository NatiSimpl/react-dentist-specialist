import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/gif/loading-arrow.gif';
import PropTypes from "prop-types";

export default function Doctor({ doctor }) {
    const{name,slug,images,type} = doctor;
    //elimine price de const

return (
  <article className="doctor">
    <div className="img-container">
        <img src={images[0] || defaultImg} alt="featured specialist" />
          <div className="price-top">
            {/* <h6>${price}</h6> */}
            <h6>{type}</h6>
          </div>
          <Link to={`/Doctors/${slug}`} className="btn-primary doctor-link">
              Features
          </Link>
    </div>
              <p className="doctor-info">{name}</p>
  </article>
  )
}
Doctor.propTypes = {
      doctor:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        // price:PropTypes.number.isRequired,
    })

}

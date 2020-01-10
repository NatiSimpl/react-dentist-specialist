import React, { Component } from 'react';
//import logo from '../images/logo.svg';
import { FaTooth } from 'react-icons/fa';
import {FaAlignRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return ( 
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/"><FaTooth /> GetDentist</Link>
                    </li>
                    <li>
                        <Link to="/doctors">Specialists</Link>
                    </li>
                    </ul>
                </div>
            </nav> 
        )     
    }
}

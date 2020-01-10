import React, { Component } from 'react'
import {FaCalendarCheck,FaRegPaperPlane} from 'react-icons/fa'
import {GiDiscussion} from "react-icons/gi";
import {IoIosEye} from "react-icons/io";
import Title from './Titles'
export default class Services extends Component {
state={
    services:[

          {
            icon:<GiDiscussion/>,
            title:"virtual  assessment",
            info:'Lorem Ipsul dolor sit amet consecterur orem Ipsul dolor sit amet consecterur orem Ipsul dolor sit amet consecterurorem Ipsul dolor sit amet consecterur'
        },

        {
            icon:<FaCalendarCheck/>,
            title:"make your appointment",
            info:'Lorem Ipsul dolor sit amet consecterur orem Ipsul dolor sit amet consecterur orem Ipsul dolor sit amet consecterurorem Ipsul dolor sit amet consecterur'
        },

        {
            icon:<FaRegPaperPlane/>,
            title:"travel and tretament",
            info:'Lorem Ipsul dolor sit amet consecterur orem Ipsul dolor sit amet consecterur orem Ipsul dolor sit amet consecterurorem Ipsul dolor sit amet consecterur'
        },

        {
            icon:<IoIosEye/>,
            title:"blog",
            info:'Lorem Ipsul dolor sit amet consecterur orem Ipsul dolor sit amet consecterur orem Ipsul dolor sit amet consecterurorem Ipsul dolor sit amet consecterur'
        }
    ]
};
    render() {
        return (
            <section className="services">

                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>

            </section>
        );
    }
}
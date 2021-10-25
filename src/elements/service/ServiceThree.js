import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/service/icon-012.png',
        title: 'The Drop',
        description: '10,000 unique Bubbly Booties NFTs were released, with some super rare booties!'
    },
    {
        image: '/images/service/icon-02.png',
        title: 'NFTs',
        description: 'The digital illustrations are managed entirely by the smart contract.'
    },
    {
        image: '/images/service/icon-03.png',
        title: 'Bootyverse',
        description: 'We are creating new ways to have fun with your booties!'
    }
]
const ServiceThree = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                                <div className="content">
                                    <h4 className="title" dangerouslySetInnerHTML={{__html: val.title}}></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceThree;
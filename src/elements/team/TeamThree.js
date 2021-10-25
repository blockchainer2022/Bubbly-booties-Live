import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'team-dark-01',
        name: 'Pia',
        designation: 'Art',
    },
    {
        image: 'team-dark-03',
        name: 'Tim',
        designation: 'Dev',
    },
    {
        image: 'team-dark-02',
        name: 'Ryro',
        designation: 'Ops',
    },
    {
        image: 'team-dark-04',
        name: 'Winnie',
        designation: 'Marketing',
    }
]


const TeamThree = ({column , teamStyle}) => {
    return (
        <div className="row row--30">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}.png`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TeamThree;

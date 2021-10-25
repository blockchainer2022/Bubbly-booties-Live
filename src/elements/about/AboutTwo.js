import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center justify--center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100 img-rounded" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-5 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h1 className="title mt--10">About the Booties</h1>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p>Each Booty is unique and is generated procedurally based on more than 70 traits.</p>
                                    <p>All Booties are awesome (we all accept that!) but some have rare traits that make them stand out as nobility!</p>
                                    <h5>Rewards</h5>
                                    <p>We will use 100% of the OpenSea royalties to <b>sweep the floor of the collection each week and distribute them randomly between the Bubbly Booties holders</b>.</p>
                                    <p>Minting a "Bubbly Booty" will give you a free claim to all future collections. If you buy and hold your Bubbly Booty <b>you will end up with 3 additional NFTs for free</b> from the following collections: Bubbly Babes, Giganerd and Genius Tots.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutTwo;

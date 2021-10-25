import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';
import ScrollAnimation from "react-animate-on-scroll";

const AbouThree = () => {
    return (
        
        <div id="faq" className="rn-about-area about-style-3 rn-section-gap">
            <div className="container">
            <div class="col-lg-12 mb--15">
                <div className="row row--30">
                    <div className="col-lg-12 align-items-center mt_md--40 mt_sm--40">
                        <div className="inner">
                            <div className="section-title text-center align-items-center">
                                <h2 className="title mb--40">Frequently Asked Questions</h2>
                            </div>
                            <AccordionOne customStyle="" />
                        </div>
                    </div>
                </div>
            </div>                        
        </div>
        </div>
    )
}

export default AbouThree

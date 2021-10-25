import React from 'react';
import { SiTwitter, SiDiscord } from "react-icons/si";
import {Link} from "react-router-dom";

const CopyrightTwo = () => {
    return (
        <div className="copyright-area copyright-style-one variation-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-7 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu">
                                <li><a href="/terms">Terms And Condition</a></li>
                                <li><p className="copyright-text">© Bubbly Booties {new Date().getFullYear()} </p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 mt_sm--20">
                        <div className="copyright-center text-center">
                            <ul className="social-icon social-default color-lessdark justify-content-center">
                                        <li><a href="https://twitter.com/bubblybooties" target="_blank"><SiTwitter /></a></li>
                                        <li><a href="https://discord.gg/5VBwRHZeRa" target="_blank"><SiDiscord /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CopyrightTwo;
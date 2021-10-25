import React from 'react';
import {Link} from "react-router-dom";
import { SiTwitter, SiDiscord } from "react-icons/si";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li><Link to="/">Home</Link></li>
          <ul className="social-icon social-default transparent-with-border mt--15 ml--5 mr--5">
                                        <li><a href="https://twitter.com/bubblybooties" target="_blank"><SiTwitter /></a></li>
                                        <li><a href="https://discord.gg/5VBwRHZeRa" target="_blank"><SiDiscord /></a></li>
                                    </ul>
        </ul>
    )
}
export default Nav;

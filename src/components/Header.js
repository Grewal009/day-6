import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
    return(
        <a href="/"><img className="logo" alt="logo image" src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/></a>
    );
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                </ul>

                {
                    isLoggedIn?
                    (<button className="btn-login-logout" onClick={()=>setIsLoggedIn(false)}>Logout</button>):
                    (<button className="btn-login-logout" onClick={()=>setIsLoggedIn(true)}>Login</button>)
                }

        </div>
    );
}

export default Header;
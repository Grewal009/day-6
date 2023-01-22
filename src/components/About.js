import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
    return(
        <div>
            <h1>Learning React!!!</h1>
            <h2>Finding the path...</h2>
            {//<Outlet />   //child component is shown in Outlet component 
            }
            <Profile />
        </div>
    );
}

export default About;
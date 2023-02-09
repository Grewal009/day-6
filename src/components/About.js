import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import Profile1 from "./Profile";

import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props){
        super(props);
        console.log("parent - constructor");

    }

    componentDidMount(){
        
        console.log("parent - componentDidMount");
    }
    componentDidUpdate(){
        console.log("parent - componentDidUpdate");
    }

    render(){
        console.log("parent - render");
        return(
            <div>
                <UserContext.Consumer>
                    {({user}) => <h2>{user.name} - {user.email}</h2>}
                </UserContext.Consumer>
                <h1>Learning React!!!</h1>
                <h2>Finding the path...</h2>
                {//<Outlet />   //child component is shown in Outlet component 
                }
                <Profile name={"first"}/>
                {/* <Profile1 name={"second"}/> */}
                
            </div>
        );
    }
}

export default About;
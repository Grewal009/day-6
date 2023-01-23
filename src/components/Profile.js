import React from "react";


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0,
        }

        console.log("child constructor " + this.props.name);
    }

    componentDidMount(){
        this.timer = setInterval(
            ()=>console.log("namaste js"), 1000
        );

        this.setState({
            count : 1,
        });

        console.log("child componentDidMount "+ this.props.name);
    }

    componentDidUpdate(){
        console.log("child - componentDidUpdate - "+this.props.name);
        
        console.log("count - "+ this.state.count);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("child componentWillUnmount");
    }

    render(){
        console.log("child render - "+this.props.name);
        return(
            <>
            <h2>profile page</h2>
            </>
        );
    }
}

export default Profile;
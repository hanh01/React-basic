import React, {Component, useState} from 'react';
import LoginB from "./LoginB";

class FormLoginB extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name : "",
            error : ""
        }
    }

    adminUserB = {
            email: "hanh@gmail.com",
            password: "hanh2101"
    }


    login = details => {
        if (details.email === this.adminUserB.email && details.password === this.adminUserB.password) {
            console.log("log in")
            this.setState({
                email: details.email,
                name: details.name
            })
        } else {
            this.setState("Details do not match!")
        }
    }
    logout = () => {
        this.setState({email: "", name: ""})
    }

    render() {
        return (
            <div className="FormLogin">
                {(this.state.email !== "") ? (
                    <div className="welcome">
                        <h2>Welcome, <span>{this.state.name}</span></h2>
                        <button onClick={() => {this.logout()}}>Logout</button>
                    </div>
                ) : (
                    <LoginB Login={details => this.login(details)} error={this.state.error}/>
                )}
            </div>
        );
    }
}

export default FormLoginB;
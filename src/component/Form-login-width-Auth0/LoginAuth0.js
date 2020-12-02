import React, {Component} from 'react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class LoginAuth0 extends Component {
    render() {
        return (
            <div>
                <LoginButton/>
                <LogoutButton/>
            </div>
        );
    }
}

export default LoginAuth0;
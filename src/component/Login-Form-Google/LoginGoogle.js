import React, {Component} from 'react';
import './style.css';
import logo from './image/logo.PNG';
import GoogleLogin from "react-google-login";


const responseGoogle = (response) => {
    console.log('text',response);
}

class LoginGoogle extends Component{
    render() {
        return (
            <div className="FormLogin">
                <form >
                    <div className="form-inner">
                        <img src={logo} height="130" width="380"/>
                        <h2>ĐĂNG NHẬP</h2>
                        <div style={{paddingTop: '20px'}} className="form-group">
                            <GoogleLogin
                                clientId="384913084848-kv1oiq23ng02c0mdapfadvdua9k7lde8.apps.googleusercontent.com"
                                buttonText={<h4>ĐĂNG NHẬP BẰNG GOOGLE</h4>}
                                onSuccess={responseGoogle}
                                isSignedIn={true}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}
export default LoginGoogle;
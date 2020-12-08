import React,{useState} from 'react';
import './style.css';
import logo from './image/logo.PNG';
import GoogleLogin from "react-google-login";

function LoginA( { Login, error}) {
    const [details,setDetails] = useState({email:"", password:"", name:""})
    const submitHandler = e => {
        e.preventDefault()

        Login(details);
    }
    const responseGoogle = (response) => {
        console.log('text',response);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <img src={logo} height="130" width="380"/>
                <h2>ĐĂNG NHẬP</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}

                {/*<div className="form-group">*/}
                {/*    <label htmlFor="name">Name : </label>*/}
                {/*    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>*/}
                {/*</div>*/}

                <div className="form-group">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Login"/>
                <hr/>
                <div style={{paddingTop: '20px'}}>
                    <div style={{width: '50%',float:'left',color:'#979797'}}><h4>Đăng Nhập Với Tài Khoản Google</h4></div>
                    <GoogleLogin
                        clientId="384913084848-kv1oiq23ng02c0mdapfadvdua9k7lde8.apps.googleusercontent.com"
                        buttonText={<p style={{fontSize: '18px'}}>Google</p>}
                        onSuccess={responseGoogle}
                        isSignedIn={true}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

            </div>
        </form>
    );

}

export default LoginA;
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export default class App extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log('text',response);
          }
        return (
            <div>
               <GoogleLogin 
               clientId="384913084848-kv1oiq23ng02c0mdapfadvdua9k7lde8.apps.googleusercontent.com"
               buttonText="LoginA"
               onSuccess={responseGoogle}
               isSignedIn={true}
               onFailure={responseGoogle}
               cookiePolicy={'single_host_origin'}
               />
            </div>
        )
    }
}

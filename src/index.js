import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HandlingEvents from './component/HandlingEvents';
// import ListsKeys from './component/ListsKeys';
// import TestState from './component/TestState';
// import ListItem from './component/TestProps/Test1/ListItem'
// import Danhsachsp from './component/TestProps/Test2/Danhsachsp';
// import LifeCycle from './component/LifeCycle/LifeCycle';
// import Search from './component/Search';
// import Check from './component/Check-mail/Check';
import SearchData from './component/SearchData';
// import LoginA from "./component/Form-login-width-Auth0/LoginA";
import {Auth0Provider} from '@auth0/auth0-react';
import App from "./App";
import LoginAuth0 from "./component/Form-login-width-Auth0/LoginAuth0";
import FormLogin from "./component/Login-Form-Hook";


ReactDOM.render(
  <React.StrictMode>
      {/*<LoginA/>*/}
    {/* <Check/> */}
    {/* <App /> */}
    {/* <HandlingEvents/> */}
    {/* <ListsKeys/> */}
    {/* <TestState/> */}
    {/* <ListItem/> */}
    {/* <Danhsachsp/> */}
    {/* <LifeCycle/> */}
    {/* <Search/> */}
    {/*<SearchData/>*/}
    <FormLogin/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();


// const domain = process.env.REACT_APP_AUTHO_DOMAIN;
// const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID;
//
// ReactDOM.render(
//   <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       redirectUri={window.location.origin}
//   >
//       <LoginAuth0/>
//   </Auth0Provider>,
// document.getElementById('root')
// );
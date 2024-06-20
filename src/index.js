import React from "react";
import ReactDOM from "react-dom"; 
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-fvsdjskjd0w7an7x.us.auth0.com"
    clientId="K6AZ6nvYP2yrFIPk0ERICV2Wa8RIXpMS"
    redirectUri={window.location.origin}
  >
   
    <App />
  
  </Auth0Provider>
);

reportWebVitals();

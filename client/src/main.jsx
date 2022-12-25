import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-2w0b7zmsvc87m34m.us.auth0.com"
    clientId="pE8vJ3Gyt4NveaKGr4OmnJXsvP36P3H3"
    redirectUri={window.location.origin}
  >

  <BrowserRouter>
  <Router/>
  </BrowserRouter>,
  </Auth0Provider>
)

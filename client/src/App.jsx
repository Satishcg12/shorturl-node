import React from 'react';
import ShortenForm from './components/ShortanForm';

import { useAuth0 } from "@auth0/auth0-react";
import UserHistory from './components/UserHistory';

function App() {
  const { user,loginWithRedirect, logout, isAuthenticated} = useAuth0()
  return (
    <div> 
      {isAuthenticated?
      <button onClick={() => logout({returnTo:window.location.origin})}><img src={user.email}/></button>
      :
      <button onClick={() => loginWithRedirect()}>log in</button>

      }

      <h1 className="heading">URL Shortener</h1>
      <p className="description">Enter a long URL to generate a short URL that will expire in 24 hours.</p>
      {isAuthenticated&&<UserHistory/>}
      <ShortenForm />
    </div>

  );
}

export default App;

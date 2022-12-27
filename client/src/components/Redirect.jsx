import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Redirect() {
    const {shortUrl} = useParams();
  useEffect(() => {
    async function fetchLongUrl() {
      const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/${shortUrl}`);
      const data = await response.json();
      
      window.location.href = data.longUrl;
    }
    fetchLongUrl();
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default Redirect;

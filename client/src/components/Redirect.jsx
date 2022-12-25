import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Redirect() {
    const {shortUrl} = useParams();
  useEffect(() => {
    async function fetchLongUrl() {
      const response = await fetch(`http://localhost:3000/${shortUrl}`);
      const data = await response.json();
      console.log(data);
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

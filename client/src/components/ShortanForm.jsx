import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

const ShortenForm = (props) => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [copy, setCopy] = useState(false);
    const { user, isAuthenticated } = useAuth0()

    
    const handleChangeLongUrl = (event) => {
        setLongUrl(event.target.value);
    }
    const handleChangeShortUrl = (event) => {
        setShortUrl(event.target.value);
    }

    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/shorten`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shortUrl: isAuthenticated && shortUrl,
                longUrl: longUrl,
                email: isAuthenticated && user.email

            })
        })


        const data = await response.json();
        if (data.error) {
            setError(data.error);
            return;
        }
        setSuccess(true);
        
        setShortUrl(data.shortUrl);
    }
    const copyUrl = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 1000);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error ? <p className="error">{error}</p> : null}
            <input
                type="url"
                placeholder="Enter a long URL"
                value={longUrl}
                onChange={handleChangeLongUrl}
            />
            {isAuthenticated ?
                <input
                    type="text"
                    placeholder='costume your short url'
                    value={shortUrl}
                    onChange={handleChangeShortUrl}
                    disabled={success}
                />
                :
                shortUrl &&

                <div className="message" onClick={copyUrl}>
                    <p>Short URL:</p>
                    <p className="short-url">{shortUrl}</p>
                </div>
            }
            <button type="submit">Shorten</button>
            {success ? <p className="success">Short URL generated successfully!</p> : null}
            {copy ? <p className="copy-message">Copied to clipboard!</p> : null}
        </form>

    );
};

export default ShortenForm;

import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserHistory = () => {
  const { user ,isAuthenticated } = useAuth0();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await fetch(`http://localhost:3000/history/${user.email}`);
        const data = await response.json();

        setHistory(data);
      } catch (error) {
        console.error(error);
      }
    };
    getHistory();
  }, []);

  return (
    <div>
      <h1>History</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {history.map((url) => (
            <tr key={url._id}>
              <td>{url.longUrl}</td>
              <td>{url.shortUrl}</td>
              <td>{url.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserHistory;
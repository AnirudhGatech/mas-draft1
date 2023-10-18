import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserDetails.css';
import Cookies from 'js-cookie'; 

function UserDetails() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const userName = Cookies.get('user_name');
    if (userName) {
        axios.get(`https://sportssync-backend.onrender.com/getEventByUser?name=${userName}`)
      .then((response) => {
        setUserDetails(response.data.data); // Access the "data" field
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, []);

  return (
    <div className="container"> {/* Container for card views */}
      
      {userDetails.length > 0 ? (
        userDetails.map((user, index) => (
          <div className="card" key={index}>
            <h2>Event Name: {user.eventName || 'N/A'}</h2>
            <p>Date: {user.date || 'N/A'}</p>
            <p>Venue: {user.venue || 'N/A'}</p>
            <p>Organizer: {user.organizer || 'N/A'}</p>
            <p>Slots Remaining: {user.slotsRemaining || 'N/A'}</p>
            <p className={`private ${user.isPrivate ? 'visible' : 'hidden'}`}>
              Is Private: {user.isPrivate ? 'Yes' : 'No'}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDetails;

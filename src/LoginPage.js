import React, { useState } from 'react';
import Cookies from 'js-cookie';

function LoginPage({ onLogin }) {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    
  }

  const handleLogin = () => {
    if (name.trim() !== '') {
      // Store the name in a cookie
      Cookies.set('user_name', name);
      // Call the login handler to set the loggedIn state in App.js
      onLogin();
    } else {
      alert('Please enter a valid name.');
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;

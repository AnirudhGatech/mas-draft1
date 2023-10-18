import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Join from "./pages/Join";
import Organize from "./pages/Organize";
import Home from "./pages/Home";
import LoginPage from "./LoginPage";
import './App.css';
import Cookies from 'js-cookie'; // Import the 'js-cookie' library

function App() {
  const [loggedIn, setLoggedIn] = useState(!!Cookies.get('user_name')); // Check if the user_name cookie exists

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  }

  // Function to handle logout
  const handleLogout = () => {
    Cookies.remove('user_name'); // Remove the user_name cookie
    setLoggedIn(false);
  }

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          {loggedIn ? (
            // If logged in, show navigation menu and routes to Home, Organize, and Join
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Organize">Organize</Link>
                  </li>
                  <li>
                    <Link to="/Join">Join</Link>
                  </li>
                </ul>
              </nav>
              <Route exact path="/" component={Home} />
              <Route path="/Organize" component={Organize} />
              <Route path="/Join" component={Join} />
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            // If not logged in, show the login page
            <LoginPage onLogin={handleLogin} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;

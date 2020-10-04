import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/signup"> 
        <h3>Go to Sign up</h3>
      </Link>

    </div>
  );
}

export default Login;
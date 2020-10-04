import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <h1>Sign up Page</h1>
      <Link to="/name"> 
        <h3>Go and tell me your name</h3>
      </Link>
    </div>
  );
}

export default Signup;
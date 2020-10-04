import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Name() {
  return (
    <div>
      <h1>What's your name?</h1>
      <Link to="/interests"> 
        <h3>Thanks for the name, now tell me your interests</h3>
      </Link>
    </div>
  );
}

export default Name;
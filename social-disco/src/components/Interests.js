import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Interests() {
  return (
    <div>
      <h1>Interests Page</h1>
      <Link to="/video"> 
        <h3>Let's make a video</h3>
      </Link>
    </div>
  );
}

export default Interests;
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Matches() {
  return (
    <div style={{
      padding: "1em",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <h1 style={{
        color: '#E36A4F',
        textAlign: "left"
      }}>Your Matches:</h1>
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          marginBottom: "1em",
          display: "grid",
          gridGap: "1em",
          gridTemplateColumns: "auto auto"
        }} >
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
          <div style={{
            background: "#E4C181",
            borderRadius: "10px",
            height: "calc(50vw - 1.5em)",
            width: "calc(50vw - 1.5em)"
          }}></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}>
          <Link to="/swipe">
            <button style={{
              borderRadius: "100px",
              border: "0px",
              color: "#fff",
              background: "#E36A4F",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              fontSize: "1em",
              fontWeight: "bold",
              width: "9em",
              height: "3em",
              padding: "10px 15px",
            }}>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Matches;
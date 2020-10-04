import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Swipe() {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column"
        }}>
            <div style={{
                width: "calc(100% - 2em)",
                height: "100%",
                background: "#E4C181",
                margin: "1em",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden"
            }}>
                <div style={{
                    position: "absolute",
                    right: "1em",
                    top: "1em",
                    color: "#fff"
                }}>
                    <i className="material-icons">info</i>
                </div>
                <div style={{
                    position: "absolute",
                    bottom: "0em",
                    color: "#fff",
                    margin: "0em 1em"
                }}>
                    <h1>Teddy, 21</h1>
                </div>
                <div style={{
                    height: "100%",
                    width: "100%",
                }}>
                    <video autoPlay loop style={{
                        background: "#E4C181",
                        height: "100%",
                        width: "100%",
                        objectFit: "cover"
                    }}>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
                    </video>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    background: "#e36a4f",
                    borderRadius: "10px 10px 0px 0px",
                    minHeight: "70px"
                }}>
                <button
                    style={{
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <i className="material-icons">settings</i>
                    Settings
                </button>
                <button
                    style={{
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <i className="material-icons">undo</i>
                </button>
                <button
                    style={{
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <i className="material-icons">add_box</i>
                </button>
                <button
                    style={{
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <i className="material-icons">redo</i>
                </button>
                <Link to="/matches">
                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <i className="material-icons">message</i>
                    Matches
                </button>
                </Link>
            </div>
        </div >
    );
}

export default Swipe;
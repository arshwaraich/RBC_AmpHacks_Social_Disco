import React from 'react';
import '../App.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container } from 'react-bootstrap';

function Signup() {
    return (
        <Container>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button size="lg" style={{
                background: "#E36A4F",
                border: "none",
                width: "calc(100% - 2em)",
                padding: "1em",
                borderRadius: "5px",
                fontWeight: "bold",
                color: "white"
            }}>Sign up with Google</button>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <hr style={{ width: "100%" }} />
                OR
                <hr style={{ width: "100%" }} />
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="padding-top20">
                    <button size="lg" style={{
                        background: "#E36A4F",
                        border: "none",
                        width: "calc(100% - 2em)",
                        padding: "1em",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        color: "white"
                    }} type="submit">
                        Sign Up
                </button>
                </div>
            </Form>
            <div className="padding-top30"
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                <p>Have an account?&nbsp;</p>
                <Link to="/login">
                    <p>Log In</p>
                </Link>
            </div>
        </Container>
    );
}

export default Signup;
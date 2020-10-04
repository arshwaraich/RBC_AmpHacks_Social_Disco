import React from 'react';
import '../App.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function Signup() {
  return (
    <Container>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="padding-top20">
                <Link to="/name">
                <Button variant="success" size="lg" type="submit">
                    Sign Up
                </Button>
                </Link>
                </div>
            </Form>
            <div className="padding-top30">
                <p>Have an account?</p>
            </div>
            <Link to="/login">
                <h5>Log In</h5>
            </Link>
        </Container>
  );
}

export default Signup;
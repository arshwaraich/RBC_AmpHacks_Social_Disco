import React from 'react';
import '../App.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function Login() {
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
                <Button variant="success" size="lg" type="submit">
                    Log In
                </Button>
                </div>
            </Form>
            <div className="padding-top30">
                <p>Don't have an account?</p>
            </div>
            <Link to="/signup">
                <h5>Sign up</h5>
            </Link>
        </Container>
    );
}

export default Login;
import React from 'react';
import '../App.css';
import orangerectangle from "../images/orange-rectangle.png";
import yellowrectangle from "../images/yellow-rectangle.png";
import { Link } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';

function Name() {
  return (
    <div>
      <img src={yellowrectangle} alt="yellow-rectangle"/>
      <h2 style={{
                padding: "30px",
                color: '#E36A4F'
            }}>Hi! Welcome to Social Disco!</h2>
      <Container>
      <Form>
        <Form.Label>What's your name?</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Your name" />
      <Link style={{padding: "50px"}} to="/interests"> 
      <button type="submit" style={{
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
                                }}>Next</button>
      </Link>
      </Form>
      </Container>
      <img style={{position: "absolute",
                    bottom: "0",
                    right: "0"

        }} src={orangerectangle} alt="orange-rectangle"/>
    </div>
  );
}

export default Name;
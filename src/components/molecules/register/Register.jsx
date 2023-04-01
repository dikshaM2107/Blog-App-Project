import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your registration logic, such as calling an API or adding to a database
    console.log(`Registering with name: ${name}, email: ${email}, and password: ${password}`);
  };

  return (
    <Container className="register-container">
      <Form onSubmit={handleSubmit}>
        <h1 className="register-header">Register</h1>
        <Form.Group controlId="formName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className="register-button">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;

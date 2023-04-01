import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic, such as calling an API or checking against a database
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  return (
    <Container className="login-container">
      <Form onSubmit={handleSubmit}>
        <h1 className="login-header">Login</h1>
        <Form.Group controlId="formEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-button">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

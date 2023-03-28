import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Input from './Input';
import Button from './Button';
import Login from './Login';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // you can add your authentication logic here
  };

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

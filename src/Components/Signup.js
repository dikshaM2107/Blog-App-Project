import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Input from './Input';
import Button from './Button';
import Signup from './Signup';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    // you can add your signup logic here
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
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button text="Submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;

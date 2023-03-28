import React from 'react';
import CustomInput from './Input';
import CustomButton from './Button';
import { Form } from 'react-bootstrap';

const Login = ({ onLogin, onInputChange, email, password }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <Form onSubmit={handleLogin}>
      <CustomInput label="Email" type="email" placeholder="Enter email" value={email} onChange={onInputChange} />
      <CustomInput label="Password" type="password" placeholder="Enter password" value={password} onChange={onInputChange} />
      <CustomButton variant="primary" text="Login" onClick={handleLogin} />
    </Form>
  );
};

export default Login;

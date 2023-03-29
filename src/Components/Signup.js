import React from 'react';
import CustomInput from './Input';
import CustomButton from './Button';
import { Form } from 'react-bootstrap';

const Signup = ({ onSignup, onInputChange, name, email, password }) => {
  const handleSignup = (e) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <Form onSubmit={handleSignup}>
      <CustomInput label="Name" type="text" placeholder="Enter name" value={name} onChange={onInputChange} />
      <CustomInput label="Email" type="email" placeholder="Enter email" value={email} onChange={onInputChange} />
      <CustomInput label="Password" type="password" placeholder="Enter password" value={password} onChange={onInputChange} />
      <CustomButton variant="primary" text="Signup" onClick={handleSignup} />
    </Form>
  );
};

export default Signup;

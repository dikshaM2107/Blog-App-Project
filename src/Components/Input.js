import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ label, type, placeholder, value, onChange }) => (
  <Form.Group controlId={`formBasic${label.replace(' ', '')}`}>
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </Form.Group>
);

export default Input;

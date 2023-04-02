import React from 'react';
import { Form } from 'react-bootstrap';

function PostCreateInput({ label, type, placeholder, value, onChange }) {
  return (
    <Form.Group controlId={`formBasic${label}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default PostCreateInput;

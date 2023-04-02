import React from 'react';
import { Form } from 'react-bootstrap';

const PasswordInputField = ({ controlId, label, value, onChange , style }) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label className="form-label">{label}</Form.Label >
      <Form.Control type="password" placeholder="Password" value={value} onChange={onChange}  style={style}/>
    </Form.Group>
  );
};

export default PasswordInputField;

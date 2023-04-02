import React from 'react';
import { Form } from 'react-bootstrap';

const NameInputField = ({ controlId, label, value, onChange , style }) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label className="form-label">{label}</Form.Label>
      <Form.Control type="name" placeholder="Enter email" value={value} onChange={onChange} style={style} />
    </Form.Group>
  );
};

export default NameInputField;
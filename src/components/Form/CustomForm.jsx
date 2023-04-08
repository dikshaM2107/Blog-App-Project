import React from 'react';
import { Form } from 'react-bootstrap';

const CustomForm = ({ onSubmit, children }) => {
  return (
    <Form onSubmit={onSubmit}>
      {children}
    </Form>
  );
};

export default CustomForm;

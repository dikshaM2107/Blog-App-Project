import React from 'react';
import { Button } from 'react-bootstrap';

Button = ({ text }) => (
  <Button variant="primary" type="submit">
    {text}
  </Button>
);

export default Button;

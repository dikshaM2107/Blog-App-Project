import React from 'react';
import { Button } from 'react-bootstrap';

function CustomButton({ variant, onClick, text }) {
  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
}

export default CustomButton;

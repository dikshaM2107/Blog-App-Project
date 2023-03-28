import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ variant, text, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;

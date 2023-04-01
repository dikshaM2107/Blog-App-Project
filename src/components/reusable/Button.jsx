import React from 'react';
import Button from "react-bootstrap"
const Button = ({ label, variant, size, onClick }) => {
  return (
    <Button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
};

export default Button;

import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  return (
    <Button variant={props.variant} type={props.type} onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default CustomButton;
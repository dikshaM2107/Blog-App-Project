import React from "react";
import { Form } from "react-bootstrap";

const CustomForm = (props) => {
  return <Form onSubmit={props.onSubmit}>{props.children}</Form>;
};

export default CustomForm;
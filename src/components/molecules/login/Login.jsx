import React, { useState } from "react";
import { Container, Form} from "react-bootstrap";
import EmailInputField from "../../reusable/EmailInputField";
import PasswordInputField from "../../reusable/PasswordInputField";
import CustomButton from "../../reusable/CustomButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form className="p-5">
        <h1 className="text-center mb-4">Login</h1>
        <EmailInputField
          controlId="formEmail"
          label="Email address"
          value={email}
          onChange={handleEmailChange}
          style={{ width: "300px" }}
        />
        <PasswordInputField
          controlId="formPassword"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{ width: "300px" }}
        />
        <div className="mt-4">
          <CustomButton
            text="Login"
            variant="primary"
          />
        </div>
      </Form>
    </Container>
  );
};

export default Login;

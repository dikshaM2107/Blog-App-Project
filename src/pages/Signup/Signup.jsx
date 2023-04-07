import React, { useState } from "react";
import CustomForm from "../../components/Form/CustomForm";
import Input from "../../components/Input/Input";
import CustomButton from "../../components/UI/CustomButton/CustomButton";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSignup({ username, password, email });
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <Input
        id="signup-username"
        label="Username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        id="signup-password"
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Input
        id="signup-email"
        label="Email"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <CustomButton variant="primary" type="submit" label="Sign Up" />
    </CustomForm>
  );
};

export default Signup;
import React, { useState } from "react";
import CustomForm from "../../components/Form/CustomForm";
import Input from "../../components/Input/Input";
import CustomButton from "../../components/UI/CustomButton/CustomButton";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin({ username, password });
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <Input
        id="login-username"
        label="Username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        id="login-password"
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <CustomButton variant="primary" type="submit" label="Log In" />
    </CustomForm>
  );
};

export default Login;
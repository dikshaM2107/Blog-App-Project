import React, { useState } from "react";
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import Input from "../../components/input/Input";
import CustomForm from "../../components/Form/CustomForm";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin({ username, password });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
     <CustomForm onSubmit={handleSubmit}>
      <Input
        id="login-username"
        label="Username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className="col-sm-6 col-md-4 mb-3"
      />
      <Input
        id="login-password"
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="col-sm-6 col-md-4 mb-3"
      />
             <div className=" mt-3">
          <CustomButton variant="primary" type="submit" label="Login" />
        </div>
        </CustomForm>
  </div>
  );
};

export default Login;

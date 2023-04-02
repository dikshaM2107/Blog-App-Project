import { Container, Form } from "react-bootstrap";
import NameInputField from "../../reusable/NameInputField";
import EmailInputField from "../../reusable/EmailInputField";
import PasswordInputField from "../../reusable/PasswordInputField";
import CustomButton from "../../reusable/CustomButton";

const Register = () => {


  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form className="p-5">
        <h1 className="text-center mb-4">Register</h1>
        <NameInputField
          controlId="formEmail"
          label="Name "
          style={{ width: "300px" }}
        />

        <EmailInputField
          controlId="formEmail"
          label="Email address"
          style={{ width: "300px" }}
        />
        <PasswordInputField
          controlId="formPassword"
          label="Password"
          style={{ width: "300px" }}
        />
        <div className="mt-4">
          <CustomButton text="Register" variant="primary" />
        </div>
      </Form>
    </Container>
  );
}

export default Register;

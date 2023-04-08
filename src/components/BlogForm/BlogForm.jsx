import React, { useState } from "react";
import { Form} from "react-bootstrap";
import Input from "../input/Input";
import CustomButton from "../UI/CustomButton/CustomButton";

function BlogForm() {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", image, caption);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form>
        <Input
          id="login-username"
          label="Upload the Image for Blog "
          type="file"
          className="col-sm-6 col-md-4 mb-3"
        />

        <Form.Group controlId="formCaption">
          <Form.Label>Write Your Blog</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter caption"
            value={caption}
            onChange={handleCaptionChange}
          />
        </Form.Group>
        <div className=" mt-3">
          <CustomButton variant="primary" type="submit" label="Post the blog" />
        </div>
      </Form>
    </div>
  );
}

export default BlogForm;

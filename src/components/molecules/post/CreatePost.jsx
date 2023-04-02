import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PostCreateInput from '../../reusable/PostCreateInput';
import CustomButton from '../../reusable/CustomButton';


const CreatePost = ({ onPostCreate }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostCreate({ content, image });
    setContent('');
    setImage('');
  };

  return (
    <>
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formContent">
      <Form.Control
        as="textarea"
        placeholder="What's on your mind?"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="formImage">
      <Form.Control
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Post
    </Button>
  </Form>
    <Form onSubmit={handleSubmit}>
      <PostCreateInput
        label="Content"
        type="textarea"
        placeholder="What's on your mind?"
        value={content}
        onChange={handleContentChange}
      />
      <PostCreateInput
        label="Image"
        type="text"
        placeholder="https://example.com/image.jpg"
        value={image}
        onChange={handleImageChange}
      />
     <div className="mt-4">
          <CustomButton
            text="post"
            variant="primary"
          />
        </div>
    </Form>
    </>
  );
}

export default CreatePost;

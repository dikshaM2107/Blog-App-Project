import React from "react";
import {Container,Row,Col,Card } from "react-bootstrap";
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import Input from "../../components/input/Input";

const Home = () => {
  const posts = [
    {
      title: "Blog Post 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sit amet sapien congue euismod id id est. Duis euismod euismod ex, sed consectetur ipsum porta nec.",
      image:
        "https://images.pexels.com/photos/14467936/pexels-photo-14467936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 10,
      comments: [
        { id: 1, author: "John Doe", content: "Great post!" },
        { id: 2, author: "Jane Smith", content: "Thanks for sharing!" },
      ],
    },
    {
      title: "Blog Post 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo sit amet sapien congue euismod id id est. Duis euismod euismod ex, sed consectetur ipsum porta nec.",
      image:
        "https://images.pexels.com/photos/14528428/pexels-photo-14528428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 5,
      comments: [{ id: 1, author: "Alice", content: "Nice article!" }],
    },
  ];

  return (
    <Container className="w-80">
      {posts.map((post) => (
        <Row key={post.title} className="mt-3 ">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={post.image}
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between align-items-center">
                  <div className=" mt-3">
                    <CustomButton
                      variant="primary"
                      type="submit"
                      label="Like"
                    />
                    <CustomButton
                      variant="primary"
                      type="submit"
                      label="comment"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter password"
                    
                      
                    /></div>
                    <div className="mt-3">
                    <CustomButton
                      variant="primary"
                      type="submit"
                      label="comment"
                    />
                    </div>
                   
                  </div>
                </div>
                {post.comments.length > 0 && (
                  <div>
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="d-flex mb-2">
                        <strong>{comment.author}:&nbsp;</strong>
                        <span>{comment.content}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default Home;

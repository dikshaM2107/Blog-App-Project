import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const  ErrorPage = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <h1>Oops!</h1>
          <p>Something went wrong.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;

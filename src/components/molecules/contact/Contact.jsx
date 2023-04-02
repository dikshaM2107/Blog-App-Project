import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CustomButton from '../../reusable/CustomButton';
import NameInputField from '../../reusable/NameInputField';
import EmailInputField from '../../reusable/EmailInputField';

function Contact() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p>Send us a message and we'll get back to you as soon as possible.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Form>
     
        <NameInputField
          controlId="formEmail"
          label="Name "
        
        />

        <EmailInputField
          controlId="formEmail"
          label="Email address"
        
        />

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>
<div className="mt-4 mb-4">
            <CustomButton text="Sumbit" variant="primary" /></div>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Our Address</h4>
          <p>1234 Main Street</p>
          <p>Anytown, USA</p>
          <p>(555) 555-5555</p>
          <p>contact@example.com</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

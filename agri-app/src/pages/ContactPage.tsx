import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      
      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Send us a Message</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} required />
                </Form.Group>
                <Button type="submit" variant="success">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Contact Information</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6>📧 Email</h6>
                <p className="mb-0">support@agriconnect.com</p>
              </div>
              <div className="mb-3">
                <h6>📞 Phone</h6>
                <p className="mb-0">+1 (555) 123-4567</p>
              </div>
              <div className="mb-3">
                <h6>📍 Address</h6>
                <p className="mb-0">123 Farm Street<br />Agriculture City, AC 12345</p>
              </div>
              <div>
                <h6>🕒 Hours</h6>
                <p className="mb-0">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM</p>
              </div>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Header>
              <h5 className="mb-0">FAQ</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6>How do I place an order?</h6>
                <p className="small text-muted">Browse products, add to cart, and checkout with your payment information.</p>
              </div>
              <div className="mb-3">
                <h6>What are your shipping policies?</h6>
                <p className="small text-muted">Free shipping on orders over $50. Delivery within 24-48 hours.</p>
              </div>
              <div>
                <h6>How do I become a farmer?</h6>
                <p className="small text-muted">Sign up as a farmer and submit your farm information for approval.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage; 
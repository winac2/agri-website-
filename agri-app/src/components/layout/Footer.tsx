import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="mb-3"> FARM TO TECH</h5>
            <p className="text-success">
              Connecting farmers and consumers for fresh, local, and sustainable agriculture products.
            </p>
            <div className="d-flex gap-3~">
              <a href="#" className="text-light text-decoration-none">📘</a>
              <a href="#" className="text-light text-decoration-none">🐦</a>
              <a href="#" className="text-light text-decoration-none">📷</a>
              <a href="#" className="text-light text-decoration-none">💼</a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/category/fruits" className="text-muted text-decoration-none">Fruits</Link></li>
              <li><Link to="/category/vegetables" className="text-muted text-decoration-none">Vegetables</Link></li>
              <li><Link to="/category/organic" className="text-muted text-decoration-none">Organic</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Account</h6>
            <ul className="list-unstyled">
              <li><Link to="/login" className="text-muted text-decoration-none">Login</Link></li>
              <li><Link to="/signup" className="text-muted text-decoration-none">Sign Up</Link></li>
              <li><Link to="/profile" className="text-muted text-decoration-none">Profile</Link></li>
              <li><Link to="/orders" className="text-muted text-decoration-none">Orders</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-muted text-decoration-none">Contact Us</Link></li>
              <li><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Shipping Info</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Returns</a></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Cookie Policy</a></li>
              <li><a href="#" className="text-muted text-decoration-none">GDPR</a></li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-muted">
              © 2025 Farm to tech. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 text-muted">
              Made to support farmers
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 
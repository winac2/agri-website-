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
              <li><Link to="/agri-website-/" className="text-success">Home</Link></li>
              <li><Link to="/agri-website-/category/thuc-pham" className="text-success">Thực phẩm</Link></li>
              <li><Link to="/agri-website-/category/trai-cay" className="text-success">Trái cây</Link></li>
              <li><Link to="/agri-website-/category/dac-san-kho" className="text-success">Đặc sản khô</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Account</h6>
            <ul className="list-unstyled">
              <li><Link to="/agri-website-/login" className="text-success">Login</Link></li>
              <li><Link to="/agri-website-/signup" className="text-success">Sign Up</Link></li>
              <li><Link to="/agri-website-/profile" className="text-success">Profile</Link></li>
              <li><Link to="/agri-website-/orders" className="text-success">Orders</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><Link to="/agri-website-/contact" className="text-success">Contact Us</Link></li>
              <li><a href="#" className="text-success">Help Center</a></li>
              <li><a href="#" className="text-success">Shipping Info</a></li>
              <li><a href="#" className="text-success">Returns</a></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-success">Privacy Policy</a></li>
              <li><a href="#" className="text-success">Terms of Service</a></li>
              <li><a href="#" className="text-success">Cookie Policy</a></li>
              <li><a href="#" className="text-success">GDPR</a></li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-success">
              © 2025 Farm to tech. All rights reserved. 1.2.2
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-success">
              Made to support farmers
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 
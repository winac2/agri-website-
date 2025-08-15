import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../../utils/AuthContext';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <BootstrapNavbar bg="success" variant="dark" expand="lg" className="py-3">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="https://winac2.github.io/agri-website-/" className="fw-bold">
           farm2tech
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="https://winac2.github.io/agri-website-/">Home</Nav.Link>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item as={Link} to="https://winac2.github.io/agri-website-/">Thực phẩm</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://winac2.github.io/agri-website-/">Đặc sản khô</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://winac2.github.io/agri-website-/">Thảo dược</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://winac2.github.io/agri-website-/">Đồ gia dụng</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://winac2.github.io/agri-website-/">Trái cây</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://winac2.github.io/agri-website-/">Sản phẩm tái chế</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="https://winac2.github.io/agri-website-/">Contact</Nav.Link>
          </Nav>
          
          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" size="sm">Search</Button>
          </Form>
          
          <Nav>
            {!user ? (
              <>
                <Nav.Link as={Link} to="https://winac2.github.io/agri-website-/" className="me-2">Login</Nav.Link>
                <Button variant="light" size="sm" onClick={() => navigate('https://winac2.github.io/agri-website-/')}>Sign Up</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="https://winac2.github.io/agri-website-/" className="me-2">
                  🛒 Cart
                </Nav.Link>
                <NavDropdown title={user.username} id="account-dropdown">
                  <NavDropdown.Item as={Link} to="https://winac2.github.io/agri-website-/">Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="https://winac2.github.io/agri-website-/">My Orders</NavDropdown.Item>
                  {/* Optionally, you can add role-based items here if you store role in AuthContext */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 
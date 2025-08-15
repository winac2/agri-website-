import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../../utils/AuthContext';
import { useLanguage } from '../../utils/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <BootstrapNavbar bg="success" variant="dark" expand="lg" className="py-3">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/agri-website-/" className="fw-bold">
           farm2tech
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/agri-website-/">{t('nav.home')}</Nav.Link>
            <NavDropdown title={t('nav.categories')} id="categories-dropdown">
              <NavDropdown.Item as={Link} to="/agri-website-/category/thực phẩm">{t('category.food')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/agri-website-/category/phụ phẩm">{t('category.dried')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/agri-website-/category/thảo dược">{t('category.herbs')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/agri-website-/category/đồ gia dụng">{t('category.household')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/agri-website-/category/trái cây">{t('category.fruits')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/agri-website-/category/sản phẩm tái chế">{t('category.recycled')}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/agri-website-/contact">{t('nav.contact')}</Nav.Link>
          </Nav>
          
          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              placeholder={t('search.placeholder')}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" size="sm">{t('search.button')}</Button>
          </Form>
          
          <div className="me-3">
            <LanguageSelector />
          </div>
          
          <Nav>
            {!user ? (
              <>
                <Nav.Link as={Link} to="/agri-website-/login" className="me-2">{t('nav.login')}</Nav.Link>
                <Button variant="light" size="sm" onClick={() => navigate('/agri-website-/signup')}>{t('nav.signup')}</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/agri-website-/cart" className="me-2">
                  🛒 {t('nav.cart')}
                </Nav.Link>
                <NavDropdown title={user.username} id="account-dropdown">
                  <NavDropdown.Item as={Link} to="/agri-website-/profile">{t('nav.profile')}</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/agri-website-/orders">{t('nav.orders')}</NavDropdown.Item>
                  {/* Optionally, you can add role-based items here if you store role in AuthContext */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>{t('nav.logout')}</NavDropdown.Item>
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
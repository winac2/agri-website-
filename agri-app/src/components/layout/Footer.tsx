import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../../utils/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="mb-3"> FARM TO TECH</h5>
            <p className="text-success">
              {t('footer.description')}
            </p>
            <div className="d-flex gap-3~">
              <a href="#" className="text-light text-decoration-none">📘</a>
              <a href="#" className="text-light text-decoration-none">🐦</a>
              <a href="#" className="text-light text-decoration-none">📷</a>
              <a href="#" className="text-light text-decoration-none">💼</a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Liên Kết Nhanh</h6>
            <ul className="list-unstyled">
              <li><Link to="/agri-website-/" className="text-success">{t('nav.home')}</Link></li>
              <li><Link to="/agri-website-/category/thực phẩm" className="text-success">{t('category.food')}</Link></li>
              <li><Link to="/agri-website-/category/trái cây" className="text-success">{t('category.fruits')}</Link></li>
              <li><Link to="/agri-website-/category/phụ phẩm" className="text-success">{t('category.dried')}</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Tài Khoản</h6>
            <ul className="list-unstyled">
              <li><Link to="/agri-website-/login" className="text-success">{t('nav.login')}</Link></li>
              <li><Link to="/agri-website-/signup" className="text-success">{t('nav.signup')}</Link></li>
              <li><Link to="/agri-website-/profile" className="text-success">{t('nav.profile')}</Link></li>
              <li><Link to="/agri-website-/orders" className="text-success">{t('nav.orders')}</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Hỗ Trợ</h6>
            <ul className="list-unstyled">
              <li><Link to="/agri-website-/contact" className="text-success">{t('nav.contact')}</Link></li>
              <li><a href="#" className="text-success">{t('footer.helpCenter')}</a></li>
              <li><a href="#" className="text-success">{t('footer.shipping')}</a></li>
              <li><a href="#" className="text-success">{t('footer.returns')}</a></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="mb-3">Pháp Lý</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-success">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-success">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-success">{t('footer.cookies')}</a></li>
              <li><a href="#" className="text-success">GDPR</a></li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        {/* Partner Units Section */}
        <Row className="mb-4">
          <Col>
            <h6 className="text-center mb-3">{t('footer.partnerorganization')}</h6>
            <div className="d-flex justify-content-center align-items-center gap-4">
              <div className="partner-logo">
                <img src="https://drive.google.com/thumbnail?id=1YnMRpT0pBibDIBavo6eBDyaO6AYJyufa" alt="Partner 1" className="img-fluid" style={{maxHeight: '50px', opacity: 0.7}} />
              </div>
              <div className="partner-logo">
                <img src="https://drive.google.com/thumbnail?id=1B-Z-hBdfPs_3vsaz2EC-dpKR8JIzt6LX" alt="Partner 2" className="img-fluid" style={{maxHeight: '50px', opacity: 0.7}} />
              </div>
              <div className="partner-logo">
                <img src="https://drive.google.com/thumbnail?id=1x6qSlgjTQrVYYU4fPodKGFQ-rc_H7igp" alt="Partner 3" className="img-fluid" style={{maxHeight: '50px', opacity: 0.7}} />
              </div>
              <div className="partner-logo">
                <img src="https://drive.google.com/thumbnail?id=1tbqK3Tyks9hkcptNSw0v5RqNWBhAmM3k" alt="Partner 4" className="img-fluid" style={{maxHeight: '50px', opacity: 0.7}} />
              </div>
              <div className="partner-logo">
                <img src="https://drive.google.com/thumbnail?id=1Qc6inrGSX1VWHO3qjk56097aqM9tTZAT" alt="Partner 5" className="img-fluid" style={{maxHeight: '50px', opacity: 0.7}} />
              </div>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-success">
              © 2025 Farm to tech. All rights reserved. 1.2.3
            </p>
          </Col>
          
          <Col md={6} className="text-md-end">
            <p className="text-success">
              {t('footer.createdForFarmers')}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 
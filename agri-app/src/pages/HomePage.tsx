import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { mockProducts, mockCategories } from '../data/mockData';
import { useLanguage } from '../utils/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const featuredProducts = mockProducts.slice(0, 4);
  const categories = mockCategories.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-success text-white w-100">
        <div className="container-fluid">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                {t('home.hero.title')}
              </h1>
              <p className="lead mb-4">
                {t('home.hero.description')}
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Link to="/agri-website-/category/thực phẩm" className="btn btn-light btn-lg text-decoration-none">
                  {t('home.hero.buyNow')}
                </Link>
                <Link to="/agri-website-/signup" className="btn btn-outline-light btn-lg text-decoration-none">
                  {t('home.hero.joinFarmer')}
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
              <img 
                src="https://drive.google.com/thumbnail?id=1sZtN-Up5EkpzFJuBUQUcG2sqRZ0PE8dz" 
                alt="Fresh produce" 
                className="img-fluid rounded w-100" 
                style={{maxWidth: '600px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">{t('home.categories.title')}</h2>
          <Row>
            {categories.map((category) => (
              <Col key={category.id} md={4} lg={2} className="mb-4">
                <Card as={Link} to={`/agri-website-/category/${category.name.toLowerCase()}`} 
                      className="text-decoration-none h-100 text-center border-0 shadow-sm">
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <div className="display-4 mb-3">{category.icon}</div>
                    <Card.Title className="h6">{category.name}</Card.Title>
                    <Card.Text className="text-muted small">
                      {category.productCount} {t('home.categories.products')}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-5 bg-light">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>{t('home.featured.title')}</h2>
            <Link to="/agri-website-/category/thực phẩm" className="btn btn-outline-success text-decoration-none">
              {t('home.featured.viewAll')}
            </Link>
          </div>
          <Row>
            {featuredProducts.map((product) => (
              <Col key={product.id} md={6} lg={3} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={product.images[0]} 
                      alt={product.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    {product.isOrganic && (
                      <Badge bg="success" className="position-absolute top-0 start-0 m-2">
                        Organic
                      </Badge>
                    )}
                    {product.isSeasonal && (
                      <Badge bg="warning" className="position-absolute top-0 end-0 m-2">
                        Seasonal
                      </Badge>
                    )}
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="h6">{product.name}</Card.Title>
                    <Card.Text className="text-muted small mb-2">
                      {t('home.featured.by')} {product.farmerName}
                    </Card.Text>
                    <div className="mb-2">
                      <span className="text-warning">★</span>
                      <span className="ms-1">{product.rating}</span>
                      <span className="text-muted ms-1">({product.reviewCount})</span>
                    </div>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="h5 mb-0">{product.price} VNĐ</span>
                        <span className="text-muted small">{t('home.featured.perUnit')} {product.unit}</span>
                      </div>
                                              <Link to={`/agri-website-/product/${product.id}`} className="btn btn-success btn-sm w-100 text-decoration-none">
                          {t('home.featured.viewDetails')}
                        </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{color: 'green'}}>{t('home.whyChoose.title')}</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="display-4 mb-3">🌱</div>
              <h4 style={{color: 'green'}}>{t('home.whyChoose.fresh.title')}</h4>
              <p style={{color: 'green'}} >
                {t('home.whyChoose.fresh.desc')}
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="display-4 mb-3">🚚</div>
              <h4 style={{color: 'green'}}>{t('home.whyChoose.delivery.title')}</h4>
              <p style={{color: 'green'}}>
                {t('home.whyChoose.delivery.desc')}
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="display-4 mb-3">👨‍🌾</div>
              <h4 style={{color: 'green'}}>{t('home.whyChoose.farmers.title')}</h4>
              <p style={{color: 'green'}}>
                {t('home.whyChoose.farmers.desc')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">{t('home.testimonials.title')}</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="text-warning mb-3">
                    ★★★★★
                  </div>
                  <Card.Text>
                    "Chất lượng rau củ tôi nhận được thật tuyệt vời. Tươi ngon, hữu cơ và được giao tận nhà!"
                  </Card.Text>
                  <Card.Title className="h6 mb-0">Nguyễn Thị Mai</Card.Title>
                  <small className="text-muted">{t('home.testimonials.regularCustomer')}</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="text-warning mb-3">
                    ★★★★★
                  </div>
                  <Card.Text>
                    "Là một nông dân, nền tảng này đã giúp tôi tiếp cận nhiều khách hàng hơn và nhận được giá cả công bằng cho sản phẩm của mình."
                  </Card.Text>
                  <Card.Title className="h6 mb-0">Trần Văn Minh</Card.Title>
                  <small className="text-muted">{t('home.testimonials.localFarmer')}</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="text-warning mb-3">
                    ★★★★★
                  </div>
                  <Card.Text>
                    "Trái cây theo mùa thật tuyệt vời! Tôi thích việc biết chính xác nguồn gốc thực phẩm của mình."
                  </Card.Text>
                  <Card.Title className="h6 mb-0">Lê Thị Hương</Card.Title>
                  <small className="text-muted">{t('home.testimonials.healthEnthusiast')}</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-success text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="mb-4">{t('home.cta.title')}</h2>
              <p className="lead mb-4">
                {t('home.cta.description')}
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/agri-website-/signup" className="btn btn-light btn-lg text-decoration-none">
                  {t('home.cta.startNow')}
                </Link>
                <Link to="/agri-website-/category/thuc-pham" className="btn btn-outline-light btn-lg text-decoration-none">
                  {t('home.cta.browseProducts')}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage; 
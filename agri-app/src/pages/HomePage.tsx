import React from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';
import { mockProducts, mockCategories } from '../data/mockData';

// Fix for react-bootstrap Button 'as' prop with react-router-dom Link
const LinkButton: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>> = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props} />
));

const HomePage: React.FC = () => {
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
                Fresh from Farm to Your Table
              </h1>
              <p className="lead mb-4">
                {/* Connect directly with local farmers and get fresh, organic produce delivered to your doorstep. 
                Support sustainable agriculture while enjoying the best quality food. */}
                content
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button as={LinkButton} to="/category/fruits" variant="light" size="lg">
                  Shop Now
                </Button>
                <Button as={LinkButton} to="/signup" variant="outline-light" size="lg">
                  Join as Farmer
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600" 
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
          <h2 className="text-center mb-5">Shop by Category</h2>
          <Row>
            {categories.map((category) => (
              <Col key={category.id} md={4} lg={2} className="mb-4">
                <Card as={Link} to={`/category/${category.name.toLowerCase()}`} 
                      className="text-decoration-none h-100 text-center border-0 shadow-sm">
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <div className="display-4 mb-3">{category.icon}</div>
                    <Card.Title className="h6">{category.name}</Card.Title>
                    <Card.Text className="text-muted small">
                      {category.productCount} products
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
            <h2>Featured Products</h2>
            <Button as={LinkButton} to="/category/fruits" variant="outline-success">
              View All
            </Button>
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
                      by {product.farmerName}
                    </Card.Text>
                    <div className="mb-2">
                      <span className="text-warning">★</span>
                      <span className="ms-1">{product.rating}</span>
                      <span className="text-muted ms-1">({product.reviewCount})</span>
                    </div>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="h5 mb-0">${product.price}</span>
                        <span className="text-muted small">per {product.unit}</span>
                      </div>
                      <Button as={LinkButton} to={`/product/${product.id}`} variant="success" size="sm" className="w-100">
                        View Details
                      </Button>
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
          <h2 className="text-center mb-5">Why Choose Our Platform?</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="display-4 mb-3">🌱</div>
              <h4>Fresh & Organic</h4>
              <p className="text-muted">
                All products are sourced directly from local farmers, ensuring freshness and quality.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="display-4 mb-3">🚚</div>
              <h4>Fast Delivery</h4>
              <p className="text-muted">
                Get your fresh produce delivered to your doorstep within 24-48 hours.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="display-4 mb-3">👨‍🌾</div>
              <h4>Support Farmers</h4>
              <p className="text-muted">
                Direct connection with farmers ensures fair prices and sustainable practices.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">What Our Customers Say</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="text-warning mb-3">
                    ★★★★★
                  </div>
                  <Card.Text>
                    "The quality of vegetables I received was outstanding. Fresh, organic, and delivered right to my door!"
                  </Card.Text>
                  <Card.Title className="h6 mb-0">Sarah Johnson</Card.Title>
                  <small className="text-muted">Regular Customer</small>
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
                    "As a farmer, this platform has helped me reach more customers and get fair prices for my produce."
                  </Card.Text>
                  <Card.Title className="h6 mb-0">Mike Chen</Card.Title>
                  <small className="text-muted">Local Farmer</small>
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
                    "The seasonal fruits are amazing! I love knowing exactly where my food comes from."
                  </Card.Text>
                  <Card.Title className="h6 mb-0">Emily Davis</Card.Title>
                  <small className="text-muted">Health Enthusiast</small>
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
              <h2 className="mb-4">Ready to Start Shopping?</h2>
              <p className="lead mb-4">
                Join thousands of customers who are already enjoying fresh, local produce.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button as={LinkButton} to="/signup" variant="light" size="lg">
                  Get Started
                </Button>
                <Button as={LinkButton} to="/category/fruits" variant="outline-light" size="lg">
                  Browse Products
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage; 
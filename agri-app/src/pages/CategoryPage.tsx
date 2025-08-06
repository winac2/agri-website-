import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { mockProducts } from '../data/mockData';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Filter products by category
  const categoryProducts = mockProducts.filter(product => 
    product.category.toLowerCase() === category?.toLowerCase()
  );

  const getCategoryDisplayName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  if (!category) {
    return (
      <Container className="py-5">
        <h2>Category not found</h2>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="mb-4">
        <h1 className="fw-bold">{getCategoryDisplayName(category)}</h1>
        <p className="text-muted">
          {categoryProducts.length} products found in {getCategoryDisplayName(category)}
        </p>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-5">
          <h3>No products found in this category</h3>
          <p className="text-muted">Check back later for new products!</p>
        </div>
      ) : (
        <Row>
          {categoryProducts.map((product) => (
            <Col key={product.id} lg={3} md={4} sm={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={product.images[0]}
                    alt={product.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  {product.isOrganic && (
                    <Badge
                      bg="success"
                      className="position-absolute top-0 start-0 m-2"
                    >
                      Organic
                    </Badge>
                  )}
                  {product.isSeasonal && (
                    <Badge
                      bg="warning"
                      text="dark"
                      className="position-absolute top-0 end-0 m-2"
                    >
                      Seasonal
                    </Badge>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{product.name}</Card.Title>
                  <Card.Text className="text-muted small mb-2">
                    {product.description.substring(0, 80)}...
                  </Card.Text>
                  <div className="mb-2">
                    <span className="text-success fw-bold">${product.price}</span>
                    <span className="text-muted ms-2">per {product.unit}</span>
                  </div>
                  <div className="mb-2">
                    <small className="text-muted">
                      By {product.farmerName}
                    </small>
                  </div>
                  <div className="mb-3">
                    <span className="text-warning">★</span>
                    <span className="ms-1">{product.rating}</span>
                    <span className="text-muted ms-1">({product.reviewCount} reviews)</span>
                  </div>
                  <div className="mt-auto">
                    <Button
                      as={Link}
                      to={`/product/${product.id}`}
                      variant="success"
                      size="sm"
                      className="w-100"
                    >
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CategoryPage; 
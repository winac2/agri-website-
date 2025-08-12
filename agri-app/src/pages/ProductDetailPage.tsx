import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Form, Alert } from 'react-bootstrap';
import { mockProducts, mockReviews } from '../data/mockData';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Find product by ID
  const product = mockProducts.find(p => p.id === id);
  const reviews = mockReviews.filter(r => r.productId === id);

  if (!product) {
    return (
      <Container className="py-5">
        <Alert variant="warning">
          Product not found. <Link to="/agri-website-/">Return to home</Link>
        </Alert>
      </Container>
    );
  }

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    alert(`Added ${quantity} ${product.unit} of ${product.name} to cart!`);
  };

  const handleBuyNow = () => {
    // TODO: Implement direct purchase
    alert('Redirecting to checkout...');
  };

  return (
    <Container className="py-5">
      <Row>
        {/* Product Images */}
        <Col lg={6} className="mb-4">
          <div className="mb-3">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="img-fluid rounded"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="d-flex gap-2">
            {product.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${product.name} ${index + 1}`}
                className={`img-thumbnail ${selectedImage === index ? 'border-success' : ''}`}
                style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </Col>

        {/* Product Info */}
        <Col lg={6}>
          <div className="mb-3">
            {product.isOrganic && (
              <Badge bg="success" className="me-2">Organic</Badge>
            )}
            {product.isSeasonal && (
              <Badge bg="warning" className="me-2">Seasonal</Badge>
            )}
          </div>
          
          <h1 className="mb-3">{product.name}</h1>
          
          <div className="mb-3">
            <span className="h3 text-success">${product.price}</span>
            <span className="text-muted ms-2">per {product.unit}</span>
          </div>
          
          <div className="mb-3">
            <span className="text-warning">★</span>
            <span className="ms-1">{product.rating}</span>
            <span className="text-muted ms-1">({product.reviewCount} reviews)</span>
          </div>
          
          <p className="text-muted mb-3">by {product.farmerName}</p>
          
          <p className="mb-4">{product.description}</p>
          
          <div className="mb-4">
            <h6>Product Details:</h6>
            <ul className="list-unstyled">
              <li><strong>Stock:</strong> {product.stock} {product.unit}</li>
              <li><strong>Shipping Areas:</strong> {product.shippingArea.join(', ')}</li>
              <li><strong>Category:</strong> {product.category}</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Select 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <div className="mt-4">
                  <strong>Total: ${(product.price * quantity).toFixed(2)}</strong>
                </div>
              </Col>
            </Row>
          </div>
          
          <div className="d-flex gap-3 mb-4">
            <Button 
              variant="success" 
              size="lg" 
              onClick={handleAddToCart}
              className="flex-fill"
            >
              Add to Cart
            </Button>
            <Button 
              variant="outline-success" 
              size="lg" 
              onClick={handleBuyNow}
              className="flex-fill"
            >
              Buy Now
            </Button>
          </div>
          
          <div className="border-top pt-3">
            <h6>Shipping Information:</h6>
            <p className="text-muted small">
              Free shipping on orders over $50. Delivery within 24-48 hours to {product.shippingArea.join(', ')}.
            </p>
          </div>
        </Col>
      </Row>

      {/* Reviews Section */}
      <Row className="mt-5">
        <Col>
          <h3>Customer Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Card key={review.id} className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="mb-0">{review.userName}</h6>
                      <div className="text-warning">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                    </div>
                    <small className="text-muted">
                      {review.createdAt.toLocaleDateString()}
                    </small>
                  </div>
                  <p className="mb-0">{review.comment}</p>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="text-muted">No reviews yet. Be the first to review this product!</p>
          )}
          
          <Button variant="outline-success" className="mt-3">
            Write a Review
          </Button>
        </Col>
      </Row>

      {/* Related Products */}
      <Row className="mt-5">
        <Col>
          <h3>You Might Also Like</h3>
          <Row>
            {mockProducts
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Col key={relatedProduct.id} md={3} className="mb-3">
                  <Card className="h-100">
                    <Card.Img 
                      variant="top" 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title className="h6">{relatedProduct.name}</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-success">${relatedProduct.price}</span>
                        <Link to={`/agri-website-/product/${relatedProduct.id}`} className="btn btn-outline-success btn-sm text-decoration-none">
                          View
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage; 
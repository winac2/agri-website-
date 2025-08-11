import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { mockProducts } from '../data/mockData';

const CartPage: React.FC = () => {
  // Mock cart items
  const [cartItems] = useState([
    { productId: '1', product: mockProducts[0], quantity: 2 },
    { productId: '2', product: mockProducts[1], quantity: 1 },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <Container className="py-5">
      <h1 className="mb-4">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <Card className="text-center py-5">
          <Card.Body>
            <h3>Your cart is empty</h3>
            <p className="text-muted">Add some products to get started!</p>
            <Link to="/" className="btn btn-success text-decoration-none">
              Continue Shopping
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Row>
          <Col lg={8}>
            {cartItems.map((item) => (
              <Card key={item.productId} className="mb-3">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="img-fluid rounded"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      />
                    </Col>
                    <Col md={4}>
                      <h6>{item.product.name}</h6>
                      <p className="text-muted small">by {item.product.farmerName}</p>
                      <span className="text-success">${item.product.price} per {item.product.unit}</span>
                    </Col>
                    <Col md={2}>
                      <Form.Select 
                        value={item.quantity}
                        onChange={() => {}}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col md={2}>
                      <span className="h6">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </Col>
                    <Col md={2}>
                      <Button variant="outline-danger" size="sm">
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
            
            <div className="d-flex justify-content-between mt-4">
              <Link to="/" className="btn btn-outline-secondary text-decoration-none">
                Continue Shopping
              </Link>
              <Button variant="outline-success">
                Update Cart
              </Button>
            </div>
          </Col>
          
          <Col lg={4}>
            <Card>
              <Card.Header>
                <h5 className="mb-0">Order Summary</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal ({cartItems.length} items):</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong className="text-success">${total.toFixed(2)}</strong>
                </div>
                
                <Form.Group className="mb-3">
                  <Form.Label>Promo Code</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline-secondary" className="ms-2">
                      Apply
                    </Button>
                  </div>
                </Form.Group>
                
                <Link to="/checkout" className="btn btn-success btn-lg w-100 text-decoration-none">
                  Proceed to Checkout
                </Link>
                
                <div className="text-center mt-3">
                  <small className="text-muted">
                    Free shipping on orders over $50
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartPage; 
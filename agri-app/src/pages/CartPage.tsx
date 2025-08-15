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
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;

  return (
    <Container className="py-5">
      <h1 className="mb-4">Giỏ Hàng</h1>
      
      {cartItems.length === 0 ? (
        <Card className="text-center py-5">
          <Card.Body>
            <h3>Giỏ hàng của bạn trống</h3>
            <p className="text-muted">Thêm một số sản phẩm để bắt đầu!</p>
            <Link to="/agri-website-/" className="btn btn-success text-decoration-none">
              Tiếp Tục Mua Sắm
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
                      <span className="text-success">{item.product.price} VNĐ mỗi {item.product.unit}</span>
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
                      <span className="h6">{(item.product.price * item.quantity).toFixed(0)} VNĐ</span>
                    </Col>
                    <Col md={2}>
                      <Button variant="outline-danger" size="sm">
                        Xóa
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
            
            <div className="d-flex justify-content-between mt-4">
              <Link to="/agri-website-/" className="btn btn-outline-secondary text-decoration-none">
                Tiếp Tục Mua Sắm
              </Link>
              <Button variant="outline-success">
                Cập Nhật Giỏ Hàng
              </Button>
            </div>
          </Col>
          
          <Col lg={4}>
            <Card>
              <Card.Header>
                <h5 className="mb-0">Tóm Tắt Đơn Hàng</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tạm tính ({cartItems.length} sản phẩm):</span>
                  <span>{subtotal.toFixed(0)} VNĐ</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Phí vận chuyển:</span>
                  <span>{shipping === 0 ? 'Miễn phí' : `${shipping.toFixed(0)} VNĐ`}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Tổng cộng:</strong>
                  <strong className="text-success">{total.toFixed(0)} VNĐ</strong>
                </div>
                
                <Form.Group className="mb-3">
                  <Form.Label>Mã Giảm Giá</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Nhập mã"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline-secondary" className="ms-2">
                      Áp Dụng
                    </Button>
                  </div>
                </Form.Group>
                
                <Link to="/agri-website-/checkout" className="btn btn-success btn-lg w-100 text-decoration-none">
                  Tiến Hành Thanh Toán
                </Link>
                
                <div className="text-center mt-3">
                  <small className="text-muted">
                    Miễn phí vận chuyển cho đơn hàng trên 500.000 VNĐ
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
import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ContactPage: React.FC = () => {
  // Form data state will be implemented when backend is connected

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Tin nhắn đã được gửi thành công!');
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Liên Hệ Chúng Tôi</h1>
      
      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Gửi Tin Nhắn Cho Chúng Tôi</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Họ Tên</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                                        <Form.Label>Tiêu Đề</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tin Nhắn</Form.Label>
                  <Form.Control as="textarea" rows={5} required />
                </Form.Group>
                <Button type="submit" variant="success">
                  Gửi Tin Nhắn
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Thông Tin Liên Hệ</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6>📧 Email</h6>
                <p className="mb-0">support@farmtotech.com</p>
              </div>
              <div className="mb-3">
                <h6>📞 Điện Thoại</h6>
                <p className="mb-0">+84 382 705 884</p>
              </div>
              <div className="mb-3">
                <h6>📍 Địa Chỉ</h6>
                <p className="mb-0">address APT<br />Quy Nhon, Binh Dinh</p>
              </div>
              <div>
                <h6>🕒 Giờ Làm Việc</h6>
                <p className="mb-0">Thứ 2 - Thứ 7: 8:00 - 17:00<br />Chủ nhật: 8:00 - 11:00</p>
              </div>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Header>
              <h5 className="mb-0">Câu Hỏi Thường Gặp</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6>Làm thế nào để đặt hàng?</h6>
                <p className="small text-muted">Duyệt sản phẩm, thêm vào giỏ hàng và thanh toán với thông tin thanh toán của bạn.</p>
              </div>
              <div className="mb-3">
                <h6>Chính sách vận chuyển của bạn là gì?</h6>
                <p className="small text-muted">Miễn phí vận chuyển cho đơn hàng trên 500.000 VNĐ. Giao hàng trong vòng 24-48 giờ.</p>
              </div>
              <div>
                <h6>Làm thế nào để trở thành nông dân?</h6>
                <p className="small text-muted">Đăng ký làm nông dân và gửi thông tin nông trại để được phê duyệt.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage; 
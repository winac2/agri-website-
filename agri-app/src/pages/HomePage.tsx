import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage: React.FC = () => {
  const supplyChainData = [
    {
      id: 1,
      title: 'Trang trại',
      icon: '🏡',
      image: 'https://drive.google.com/thumbnail?id=1E8kNcqaxzeV7ZYOM68d22uGXv-R0Apop',
      location: 'Địa điểm kinh doanh thanh hóa 8 - Công ty cổ phần nông nghiệp BAF Việt nam - Tỉnh Thanh Hóa',
      gln: 'GS1 GLN: Thiếu DL',
      controlId: 'Kiểm soát xuất trại: QC-5326881',
      time: 'Thời gian bán: 01/08/2025 19:05'
    },
    {
      id: 2,
      title: 'Cơ sở giết mỗ',
      icon: '🏭',
      image: 'https://drive.google.com/thumbnail?id=1wbqeGiyV_OkvxySAaJgXUhEHFPFlP4iI',
      location: 'CSCM Minh Hiền - CN CTCP Nông Nghiệp BaF Việt Nam Hà Nội',
      gln: 'GS1 GLN: Thiếu DL',
      controlId: 'Kiểm soát giết mổ: QC-5326890',
      time: 'Thời gian giết mổ: 01/08/2025 19:18'
    },
    {
      id: 3,
      title: 'Nhà chế biến/đóng gói',
      icon: '🏢',
      image: 'https://drive.google.com/thumbnail?id=1TrzHYpwpoZh2eJ_rp94QyGxXA8I99s1_',
      location: 'CN CTCP Nông Nghiệp BaF Việt Nam tại Hà Nội',
      gln: 'GS1 GLN: Thiếu DL',
      controlId: 'Nhà sản xuất thịt nhận ngày: 01/08/2025 19:18',
      time: 'Ngày bán của nhà sản xuất thịt: 03/08/2025 10:52'
    },
    {
      id: 4,
      title: 'Blockchain',
      icon: '🌐',
      image: 'https://drive.google.com/thumbnail?id=1VuGy9pP8i9jMAE65gPuUT6ICuoQJ7mba',
      location: 'The FoodChain',
      gln: '',
      controlId: '',
      time: 'Hash: 87a60af32edcbb431fec33 4ac4efeedaaa8230a679c3 c92e61d1f0e1801b4b91'
    },
    {
      id: 5,
      title: 'Blockchain',
      icon: '🌐',
      image: 'https://drive.google.com/thumbnail?id=12dK2gqxsDyMykPK6MXj4iz_1lCrDcmh2',
      location: 'The FoodChain',
      gln: '',
      controlId: '',
      time: 'Hash: 87a60af32edcbb431fec33 4ac4efeedaaa8230a679c3 c92e61d1f0e1801b4b91'
    }
  ];

  return (
    <Container className="py-4">
      {/* Hero Image Section */}
      <Row className="mb-5">
        <Col>
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="position-relative">
              {/* Background Image */}
              <div 
                className="w-100"
                style={{
                  height: '300px',
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="text-center text-white">
                    <h1 className="display-4 fw-bold mb-3">Chuỗi Cung Ứng Nông Sản</h1>
                    <p className="lead mb-4">Theo dõi hành trình từ trang trại đến bàn ăn của bạn</p>
                    <Button variant="light" size="lg" className="fw-bold">
                      Tìm hiểu thêm
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Header Section */}
      <Row className="mb-4">
        <Col>
          <Card className="border-0 bg-light">
            <Card.Body className="d-flex align-items-center">
              <div className="me-3">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: '40px', height: '40px' }}>
                  <span className="text-white">🌐</span>
                </div>
              </div>
              <div>
                <h6 className="mb-0 fw-bold">Dữ liệu được hiển thị được chứng nhận bởi Doanh nghiệp.</h6>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Supply Chain Flow */}
      <Row>
        <Col>
          <div className="position-relative">
            {/* Vertical Line
            <div className="position-absolute" 
                 style={{ 
                   left: '50%', 
                   top: '0', 
                   bottom: '0', 
                   width: '3px', 
                   backgroundColor: '#0d6efd',
                   transform: 'translateX(-50%)',
                   zIndex: 1
                 }}>
            </div> */}

            {/* Supply Chain Stages */}
            {supplyChainData.map((stage) => (
              <div key={stage.id} className="position-relative mb-4">
                <Row className="align-items-center">
                  {/* Icon Circle */}
                  <Col xs={2} className="text-center position-relative" style={{ zIndex: 2 }}>
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto"
                         style={{ width: '60px', height: '60px' }}>
                      <span className="text-white fs-4">{stage.icon}</span>
                    </div>
                  </Col>
                  
                  {/* Content Card */}
                  <Col xs={10}>
                    <Card className="border-0 shadow-sm h-100">
                      <Card.Body className="p-3">
                        <div className="d-flex justify-content-between align-items-start">
                          {/* Image Section */}
                          <div className="me-3" style={{ width: '120px', flexShrink: 0 }}>
                            <img 
                              src={stage.image} 
                              alt={stage.title}
                              className="rounded"
                              style={{ 
                                width: '100%', 
                                height: '80px', 
                                objectFit: 'cover' 
                              }}
                            />
                          </div>
                          
                          {/* Text Information */}
                          <div className="flex-grow-1">
                            <h6 className="fw-bold mb-2">{stage.title}</h6>
                            <p className="text-muted small mb-1">{stage.location}</p>
                            {stage.gln && <p className="text-muted small mb-1">{stage.gln}</p>}
                            {stage.controlId && <p className="text-muted small mb-1">{stage.controlId}</p>}
                            <p className="text-muted small mb-0">{stage.time}</p>
                          </div>
                          
                          {/* Button */}
                          <Button 
                            variant="outline-primary" 
                            size="sm"
                            className="ms-2"
                          >
                            Xem thêm
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage; 
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Nav } from 'react-bootstrap';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <Container className="py-5">
      <h1 className="mb-4">My Profile</h1>
      
      <Row>
        <Col lg={3}>
          <Card>
            <Card.Body>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'profile'} 
                    onClick={() => setActiveTab('profile')}
                  >
                    Profile Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'orders'} 
                    onClick={() => setActiveTab('orders')}
                  >
                    Order History
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'addresses'} 
                    onClick={() => setActiveTab('addresses')}
                  >
                    Addresses
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    active={activeTab === 'payment'} 
                    onClick={() => setActiveTab('payment')}
                  >
                    Payment Methods
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={9}>
          <Card>
            <Card.Body>
              {activeTab === 'profile' && (
                <div>
                  <h4>Profile Information</h4>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" defaultValue="Vanguard" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" defaultValue="The" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" defaultValue="vanguard@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="tel" defaultValue="+84 909 090 909" />
                    </Form.Group>
                    <Button variant="success">Save Changes</Button>
                  </Form>
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div>
                  <h4>Order History</h4>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6>Order #12345</h6>
                        <p className="text-muted mb-0">Placed on Jan 15, 2024</p>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-success">Delivered</span>
                        <p className="mb-0">$24.97</p>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6>Order #12344</h6>
                        <p className="text-muted mb-0">Placed on Jan 10, 2024</p>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-warning">Processing</span>
                        <p className="mb-0">$18.50</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'addresses' && (
                <div>
                  <h4>Addresses</h4>
                  <Card className="mb-3">
                    <Card.Body>
                      <h6>Default Address</h6>
                      <p className="mb-2">123 Main St<br />Los Angeles, CA 90210</p>
                      <Button variant="outline-primary" size="sm">Edit</Button>
                    </Card.Body>
                  </Card>
                  <Button variant="success">Add New Address</Button>
                </div>
              )}
              
              {activeTab === 'payment' && (
                <div>
                  <h4>Payment Methods</h4>
                  <Card className="mb-3">
                    <Card.Body>
                      <h6>Visa ending in 1234</h6>
                      <p className="text-muted mb-2">Expires 12/25</p>
                      <Button variant="outline-danger" size="sm">Remove</Button>
                    </Card.Body>
                  </Card>
                  <Button variant="success">Add Payment Method</Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage; 
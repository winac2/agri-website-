import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const OrderManagementPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const mockOrders = [
    {
      id: '12345',
      date: '2024-01-15',
      items: ['Fresh Organic Apples (2 lb)', 'Fresh Spinach (1 bunch)'],
      total: 24.97,
      status: 'delivered',
      tracking: '1Z999AA1234567890'
    },
    {
      id: '12344',
      date: '2024-01-10',
      items: ['Organic Tomatoes (1 lb)'],
      total: 3.99,
      status: 'processing',
      tracking: null
    },
    {
      id: '12343',
      date: '2024-01-08',
      items: ['Whole Grain Bread (2 loaves)', 'Fresh Milk (1 gallon)'],
      total: 18.50,
      status: 'shipped',
      tracking: '1Z999AA1234567891'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: string } = {
      'pending': 'secondary',
      'processing': 'warning',
      'shipped': 'info',
      'delivered': 'success',
      'cancelled': 'danger'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status.toUpperCase()}</Badge>;
  };

  const filteredOrders = activeFilter === 'all' 
    ? mockOrders 
    : mockOrders.filter(order => order.status === activeFilter);

  return (
    <Container className="py-5">
      <h1 className="mb-4">Order Management</h1>
      
      <Row>
        <Col lg={3}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Filter Orders</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-column">
                <Button 
                  variant={activeFilter === 'all' ? 'success' : 'outline-success'} 
                  className="mb-2"
                  onClick={() => setActiveFilter('all')}
                >
                  All Orders
                </Button>
                <Button 
                  variant={activeFilter === 'pending' ? 'success' : 'outline-success'} 
                  className="mb-2"
                  onClick={() => setActiveFilter('pending')}
                >
                  Pending
                </Button>
                <Button 
                  variant={activeFilter === 'processing' ? 'success' : 'outline-success'} 
                  className="mb-2"
                  onClick={() => setActiveFilter('processing')}
                >
                  Processing
                </Button>
                <Button 
                  variant={activeFilter === 'shipped' ? 'success' : 'outline-success'} 
                  className="mb-2"
                  onClick={() => setActiveFilter('shipped')}
                >
                  Shipped
                </Button>
                <Button 
                  variant={activeFilter === 'delivered' ? 'success' : 'outline-success'} 
                  className="mb-2"
                  onClick={() => setActiveFilter('delivered')}
                >
                  Delivered
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={9}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Order History</h5>
            </Card.Header>
            <Card.Body>
              {filteredOrders.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-muted">No orders found with the selected filter.</p>
                </div>
              ) : (
                <div>
                  {filteredOrders.map((order) => (
                    <Card key={order.id} className="mb-3">
                      <Card.Body>
                        <Row className="align-items-center">
                          <Col md={3}>
                            <h6>Order #{order.id}</h6>
                            <small className="text-muted">{order.date}</small>
                          </Col>
                          <Col md={4}>
                            <div>
                              {order.items.map((item, index) => (
                                <div key={index} className="small">{item}</div>
                              ))}
                            </div>
                          </Col>
                          <Col md={2}>
                            <div className="text-end">
                              <strong>${order.total.toFixed(2)}</strong>
                            </div>
                          </Col>
                          <Col md={2}>
                            <div className="text-center">
                              {getStatusBadge(order.status)}
                            </div>
                          </Col>
                          <Col md={1}>
                            <div className="text-end">
                              <Button variant="outline-primary" size="sm">
                                View
                              </Button>
                            </div>
                          </Col>
                        </Row>
                        
                        {order.tracking && (
                          <Row className="mt-3">
                            <Col>
                              <div className="border-top pt-3">
                                <small className="text-muted">
                                  <strong>Tracking Number:</strong> {order.tracking}
                                </small>
                                <Button variant="link" size="sm" className="ms-2">
                                  Track Package
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        )}
                        
                        {order.status === 'processing' && (
                          <Row className="mt-3">
                            <Col>
                              <div className="border-top pt-3">
                                <Button variant="outline-danger" size="sm">
                                  Cancel Order
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        )}
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderManagementPage; 
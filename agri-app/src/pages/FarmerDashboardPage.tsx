import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { mockProducts } from '../data/mockData';

const FarmerDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('products');
  const myProducts = mockProducts.filter(p => p.farmerId === 'farmer1');

  return (
    <Container className="py-5">
      <h1 className="mb-4">Farmer Dashboard</h1>
      
      <Row>
        <Col lg={3}>
          <Card>
            <Card.Body>
              <div className="text-center mb-3">
                <h5>Green Valley Farm</h5>
                <p className="text-muted">Active Farmer</p>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Total Products:</span>
                <strong>{myProducts.length}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Total Sales:</span>
                <strong>$1,247.50</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Orders:</span>
                <strong>12</strong>
              </div>
            </Card.Body>
          </Card>
          
          <Card className="mt-3">
            <Card.Body>
              <h6>Quick Actions</h6>
              <Button variant="success" size="sm" className="w-100 mb-2">
                Add New Product
              </Button>
              <Button variant="outline-success" size="sm" className="w-100 mb-2">
                View Orders
              </Button>
              <Button variant="outline-secondary" size="sm" className="w-100">
                Analytics
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={9}>
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Manage Your Business</h5>
                <div>
                  <Button 
                    variant={activeTab === 'products' ? 'success' : 'outline-success'} 
                    size="sm" 
                    className="me-2"
                    onClick={() => setActiveTab('products')}
                  >
                    Products
                  </Button>
                  <Button 
                    variant={activeTab === 'orders' ? 'success' : 'outline-success'} 
                    size="sm"
                    onClick={() => setActiveTab('orders')}
                  >
                    Orders
                  </Button>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              {activeTab === 'products' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6>My Products</h6>
                    <Button variant="success" size="sm">Add Product</Button>
                  </div>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myProducts.map((product) => (
                        <tr key={product.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img 
                                src={product.images[0]} 
                                alt={product.name}
                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                className="rounded me-3"
                              />
                              <div>
                                <strong>{product.name}</strong>
                                <br />
                                <small className="text-muted">{product.category}</small>
                              </div>
                            </div>
                          </td>
                          <td>${product.price}</td>
                          <td>{product.stock} {product.unit}</td>
                          <td>
                            <Badge bg={product.stock > 0 ? 'success' : 'danger'}>
                              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                          </td>
                          <td>
                            <Button variant="outline-primary" size="sm" className="me-1">Edit</Button>
                            <Button variant="outline-danger" size="sm">Delete</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div>
                  <h6>Recent Orders</h6>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Products</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#12345</td>
                        <td>John Doe</td>
                        <td>Fresh Organic Apples (2 lb)</td>
                        <td>$9.98</td>
                        <td><Badge bg="success">Delivered</Badge></td>
                        <td>
                          <Button variant="outline-primary" size="sm">View</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>#12344</td>
                        <td>Jane Smith</td>
                        <td>Organic Tomatoes (1 lb)</td>
                        <td>$3.99</td>
                        <td><Badge bg="warning">Processing</Badge></td>
                        <td>
                          <Button variant="outline-primary" size="sm">View</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FarmerDashboardPage; 
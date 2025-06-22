import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {

  return (
    <Container className="home-container mt-5 p-4 rounded-3">
      <header className="text-center mb-5">
        <h1>Welcome to Da store</h1>
        <p className="lead">
          We offer a wide variety of products to meet all your needs. Browse our categories and find what you're looking for.
        </p>
        <hr className="my-4" />
        <p>
          Enjoy exclusive offers and deals when you shop with us. Happy shopping!
        </p>
        <p className="lead">
          <Link to='/store' className="custom-link">
            <Button variant="primary" className="me-2 custom-button">
              Shop Now
            </Button>
          </Link>
          <Link to='/login' className="custom-link">
            <Button variant="outline-success" className="custom-button-outline" >
              Login
            </Button>
          </Link>
        </p>
      </header>

      <Row className="text-center">
        <Col md={4} className="mb-4">
          <div className="p-3 border bg-white rounded shadow-sm">
            <h2>Quality Products</h2>
            <p>We offer a wide range of high-quality products to meet your needs.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="p-3 border bg-white rounded shadow-sm">
            <h2>Great Deals</h2>
            <p>Check out our latest promotions and discounts.</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="p-3 border bg-white rounded shadow-sm">
            <h2>Customer Support</h2>
            <p>Our customer support team is here to help you with any questions.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

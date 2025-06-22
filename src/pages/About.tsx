import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Container className="about-container mt-5 p-4 rounded-3">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="https://via.placeholder.com/500"
            alt="About Us"
            className="img-fluid rounded shadow-sm mb-4 mb-md-0"
          />
        </Col>
        <Col md={6}>
          <header className="mb-4">
            <h1>About Us</h1>
            <p className="lead">
              Welcome to Our Store! We are dedicated to providing you with the best products and customer service. Our mission is to meet all your needs with a wide variety of high-quality products.
            </p>
            <hr className="my-4" />
            <p>
              We started our journey with a passion for excellence and a commitment to bringing you the latest and greatest products at competitive prices.
            </p>
            <p className="lead">
              <Link to='/store' className="custom-link">
                <Button variant="primary" className="me-2">
                  Go to Store
                </Button>
              </Link>
              <Link to="https://github.com/ChadGotei/" target='_blank'>
                More
              </Link>
            </p>
          </header>
        </Col>
      </Row>
    </Container>
  );
}

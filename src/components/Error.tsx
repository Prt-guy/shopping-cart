import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Error() {
    const navigate = useNavigate();

    return (
        <section className="d-flex align-items-center p-5 text-dark">
            <Container className="d-flex flex-column align-items-center justify-content-center px-5 my-8">
                <Row className="text-center">
                    <Col md={12}>
                        <h2 className="mb-8 font-weight-bold display-1 text-secondary">
                            <span className="sr-only"></span>404
                        </h2>
                        <p className="h4 font-weight-semibold">
                            Sorry, we couldn't find this page.
                        </p>
                        <p className="mt-4 mb-8 text-muted">
                            But don't worry, you can find plenty of other things on our homepage.
                        </p>
                        <Button
                            onClick={() => navigate('/')}
                            variant="primary"
                            className="px-4 py-2 font-weight-semibold rounded"
                        >
                            Back to homepage
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

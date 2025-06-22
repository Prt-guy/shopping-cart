/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Button } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { useShoppingCart } from '../contexts/ShoppingCartContext';
import Error from '../components/Error';

import { randomSales, randomUsers, randomOrders } from '../utilities/randomNumber';
import { formatCurrency } from '../utilities/formatCurrency';
import DashboardTable from '../components/DashboardTable';


export default function Dashboard() {
    const [data, setData] = useState([
        { name: 'Jan', uv: 400 },
        { name: 'Feb', uv: 300 },
        { name: 'Mar', uv: 200 },
        { name: 'Apr', uv: 278 },
        { name: 'May', uv: 189 },
        { name: 'Jun', uv: 239 },
        { name: 'Jul', uv: 349 },
        { name: 'Aug', uv: 200 },
        { name: 'Sep', uv: 300 },
        { name: 'Oct', uv: 400 },
        { name: 'Nov', uv: 500 },
        { name: 'Dec', uv: 600 },
    ]);

    const { isVerified, handleLogOut } = useShoppingCart();

    return (
        isVerified ? <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link as={Button} variant="outline-secondary" onClick={handleLogOut}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-4">
                <Row>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Total Sales</Card.Title>
                                <Card.Text>
                                    {formatCurrency(randomSales)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Total Users</Card.Title>
                                <Card.Text>
                                    {randomUsers}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Total Orders</Card.Title>
                                <Card.Text>
                                    {randomOrders}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Sales Overview</Card.Title>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={data}>
                                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                        <CartesianGrid stroke="#ccc" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Product Catalogue</Card.Title>

                                <DashboardTable />

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className='lead bg-light py-2 px-3'>Just a presentational Component</div>
            </Container>
        </div> : <Error />
    );
}

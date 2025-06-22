import { useState, FormEvent } from "react";
import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import Message from "../components/Message";

export default function Login() {
    const [email, setEmail] = useState('pintu@example.com');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setVerified } = useShoppingCart();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setVerified();
        navigate('/dashboard');
    }

    return (
        <Container className="container p-4 rounded-3 bg-light shadow-lg mt-5" style={{ maxWidth: '400px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -70%)' }}>
            <h1 className="text-center">Login</h1>
            <h4 className="text-center lead mb-4">as producer/salesman</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        id="email"
                        type="email"
                        placeholder="pintu99@example.dev"
                        className="px-3 py-2"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        placeholder="********"
                        minLength={8}
                        className="px-3 py-2"
                        required
                    />
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    className="w-100 my-2"
                >
                    Submit
                </Button>
            </Form>
            {/* <Message type="info" message="Login to add items to store"/> */}
            <Message type="info" message="login to get access of dashboard"/>
        </Container>
    );
}

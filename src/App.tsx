import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";

import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

export default function App() {
  return (
    <ShoppingCartProvider>
      <Container className="mb-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

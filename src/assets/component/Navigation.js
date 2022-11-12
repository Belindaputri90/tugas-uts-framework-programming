import { React } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import FormPemesanan from "../page/FormPemesanan";
import Product from "../page/Product";
import "../css/styles.css";

const Navigation = () => {
  return (
    <Router>
      <Navbar className="navigation fixed-top text-dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="Brand">
            <h2>La Belle Blanc</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="mr-auto links">
              <Nav.Link className="Link" as={Link} to={"/Home"}>
                Home
              </Nav.Link>
              <Nav.Link className="Link" as={Link} to={"/About"}>
                About
              </Nav.Link>
              <Nav.Link className="Link" as={Link} to={"/Contact"}>
                Contact
              </Nav.Link>
              <Nav.Link className="Link" as={Link} to={"/FormPemesanan"}>
                Order
              </Nav.Link>
              <Nav.Link className="Link" as={Link} to={"/Product"}>
                Product
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FormPemesanan" element={<FormPemesanan />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default Navigation;



import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand>Better Life Mental Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#about">About</Nav.Link>
                            <Nav.Link as={Link} to="/testimonals#testimonals">Testimonals</Nav.Link>
                            <Nav.Link as={Link} to="/doctor#doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/home#contact">Contact</Nav.Link>

                            <div className="d-flex">
                                <div className="me-3">
                                    <Button variant="outline-light">Login</Button>
                                </div>
                                <div className="me-3">
                                    <Button variant="outline-light">Register</Button>
                                </div>
                                <div>
                                    <Button variant="outline-light">Logout</Button>
                                </div>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;
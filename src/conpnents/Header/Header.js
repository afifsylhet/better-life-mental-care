

import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'



const Header = () => {
    const { user, handleSignout } = useAuth();
    const info = user.email;
    const newInfo = info?.slice(0, 4);
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
                            <Nav.Link as={Link} to="/about#about">About</Nav.Link>
                            <Nav.Link as={Link} to="/testimonals#testimonals">Testimonals</Nav.Link>
                            <Nav.Link as={Link} to="/doctor#doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/contact#contact">Contact</Nav.Link>

                            <p className="text-white mx-2 mt-2">{user.displayName || newInfo}</p>


                            {user.email || newInfo ? <div>
                                <Button onClick={handleSignout} variant="outline-light">Logout</Button>
                            </div> : <div className="d-flex">
                                <div className="me-3">
                                    <NavLink to='/Login'>
                                        <Button variant="outline-light">Login</Button>
                                    </NavLink>
                                </div>
                                <div className="me-3">

                                    <NavLink to="/Login">
                                        <Button variant="outline-light">Register</Button>
                                    </NavLink>
                                </div>

                            </div>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;
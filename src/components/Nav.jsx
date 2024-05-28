import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import  logo from '../images/HobbyCue Logo.png';
import explore from '../images/Explore.png';
import hobbies from '../images/Hobbies.png';

const CustomNavbar = () => {
    return (

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="Logo" width="293.26" height="60" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Form className="d-flex mx-auto">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">
                                <i className="fas fa-search"></i>
                            </Button>
                        </Form>
                        <Nav>
                            <div className="d-flex align-items-center">
                                <i>
                                    <img src={explore} alt="Explore" className="d-inline-block align-top"/>
                                </i>
                                <NavDropdown title="Explore" id="navbarScrollingDropdown1">
                                    <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <div className="d-flex align-items-center">
                                <i>
                                    <img src={hobbies} alt="Hobbies" className="d-inline-block align-top"/>
                                </i>
                                <NavDropdown title="Explore" id="navbarScrollingDropdown1">
                                    <NavDropdown.Item href="#">People - Community</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Places - Venues</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Programs - Events</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Products - Store</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <Nav.Link href="#">
                                <i className="fas fa-bookmark"></i>
                            </Nav.Link>
                            <Nav.Link href="#">
                                <i className="fas fa-bell"></i>
                            </Nav.Link>
                            <Nav.Link href="#">
                                <i className="fas fa-shopping-cart"></i>
                            </Nav.Link>
                            <Button variant="outline-primary" className="ms-3">Sign In</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


    );
};

export default CustomNavbar;

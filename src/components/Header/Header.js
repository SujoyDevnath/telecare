import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    return (
        <Navbar sticky="top" style={{ fontFamily: 'verdana' }} bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: '#38E738', fontWeight: 'bold', fontSize: '30px' }}>Telecare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        {/* condition checking */}
                        {user.email && <h6 className="text-white my-auto">{user.displayName}</h6>}
                        {user?.email ?
                            <Button onClick={logOut} className="btn btn-primary mx-2 py-0" variant="light">Logout</Button> :
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                            </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
import React from 'react';
import { Nav, Navbar,Button, Container  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../context/useAuth';
import './Header.css'

const Header = () => {
    const {users, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">Intese Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav-list">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#certificates">Certificates</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#phase">Phase</Nav.Link>
                        <Nav.Link as={HashLink} to="/testimonial">Testimonial</Nav.Link>
                        <Nav.Link as={HashLink} to="/consultaion">Consultaion</Nav.Link>
                        {users?.email?
                            <Button className="logout-btn" onClick={logOut} variant="light">Logout</Button>  :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text><a href="#login">{users?.displayName && users.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                <Nav className="me-auto">
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
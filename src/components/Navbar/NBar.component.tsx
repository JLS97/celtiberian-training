import React from "react";
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap'

export default class NBar extends React.Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Celtiberian-training</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/games">Juegos</Nav.Link>
                            <NavDropdown title="Tiendas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/shop/1">Steam</NavDropdown.Item>
                                <NavDropdown.Item href="/shop/2">Gamestop</NavDropdown.Item>
                                <NavDropdown.Item href="/shop/3">Game</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
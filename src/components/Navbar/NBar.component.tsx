import {Navbar, Container, Nav} from 'react-bootstrap'

const NBar = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/shops">Celtiberian-training</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/shops">Tiendas</Nav.Link>
                        <Nav.Link href="/games">Juegos</Nav.Link>
                        <Nav.Link href="/ofertas">Ofertas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NBar;
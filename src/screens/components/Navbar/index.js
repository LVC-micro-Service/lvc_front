import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import "./styles.css"

function NavBar() {
    return (
        <header>
            <Navbar collapseOnSelect className="background-navbar" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">LVC - PAMPACARE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#casos">Dashboard</Nav.Link>
                            <NavDropdown title="Casos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/lvc/registro">Cadastrar Caso</NavDropdown.Item>
                                <NavDropdown.Item href="/casos/listar">Visualizar Casos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function SiteNav() {
    return (
        <div>
            <Navbar expand="md" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <Link className="nav-link" to="/class">Class explain</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

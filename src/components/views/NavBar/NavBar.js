import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="primary" expand="lg" className="bg-body-tertiary rounded my-3">
            <Container>
                <Navbar.Brand className="text-light" href="#home">React-Bootstrap</Navbar.Brand>
                <Nav>
                    <Nav.Link className="text-light" as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
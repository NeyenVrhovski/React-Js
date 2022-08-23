import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import img from '../../../assets/icons/mainLogo.png';
import './Navbar.scss';
import CarWidget from '../../atoms/CarWidget';

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home"><img className='navbarImg' src={img}/>TiendaLibre</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Ofertas del Día</Nav.Link>
            <NavDropdown className="dropdownContainer" title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Moda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tecnología</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gaming</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Libros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <CarWidget></CarWidget>
            {/* <Nav.Link href="#">
              <Button variant="secondary">Iniciar Sesión</Button>
            </Nav.Link>
            <Nav.Link style={{display: 'flex', alignItems: 'center'}} href="#">Registrarse</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
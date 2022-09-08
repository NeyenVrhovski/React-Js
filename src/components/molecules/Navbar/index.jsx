import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../../../assets/icons/mainLogo.png';
import './Navbar.scss';
import CarWidget from '../../atoms/CarWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Link className='brandLink' to={"/"}><img className='navbarImg' src={img}/>TiendaLibre</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto linksContainer">
            <Link className='headerLink' to={"/categories/1"}>Remeras</Link>
            <Link className='headerLink' to={"/categories/2"}>Pantalones</Link>
            <Link className='headerLink' to={"/categories/3"}>Zapatillas</Link>
          </Nav>
          <Nav>
            <CarWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
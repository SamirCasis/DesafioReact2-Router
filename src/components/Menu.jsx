import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Nav className="">
          <Link to="/" className="text-white text-decoration-none">🏠 INICIO</Link>
          <Link to="/Contact" className="text-white text-decoration-none ms-3">📒 CONTACTO</Link>
        </Nav>
        <Navbar.Brand className='text-white '>HAPPY CAKE 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Menu

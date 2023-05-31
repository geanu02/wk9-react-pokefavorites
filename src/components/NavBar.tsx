import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {

    return (
        <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PokeFavorites</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Today's Favorite Pokemon</Nav.Link>
            <Nav.Link href="#">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
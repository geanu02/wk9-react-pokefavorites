import { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { PokeContext } from '../contexts/PokeProvider'


export default function NavBar() {

    const { user } = useContext(PokeContext)
    return (
        <Navbar bg="secondary" variant="light">
          <Navbar.Brand as={NavLink} to='/' >PokeFavorites</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/pokefave'>Today's Favorite Pokemon</Nav.Link>
            {
              user.token
              ? (
                <>
                  <Nav.Link as={NavLink} to='/pokeroster'>{user.username}'s Roster</Nav.Link>
                  <Nav.Link as={NavLink} to='/signout'>Sign Out</Nav.Link>
                </>
              ) : (
                <Nav.Link as={NavLink} to='/signin'>Sign In</Nav.Link>
                
              )
            }
          </Nav>
      </Navbar>
    )
}
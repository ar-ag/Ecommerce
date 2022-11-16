import React from 'react'
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {Link} from 'react-router-dom'

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect example="sm" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
            <Nav>
                <NavLink eventKey={1} as={Link} to ="/">Ecommerce</NavLink>
                <NavLink eventKey={2} as={Link} to ="/cart">Cart</NavLink>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar
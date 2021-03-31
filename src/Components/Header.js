  
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
    return (

            <Navbar bg="light" expand="lg">
            <Navbar.Brand >Confessional</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/new">Add A Secret</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header

    // original, w/o Bootstrap 
    //     <header className="header">
    //         <h1>Confessional</h1>
    //         <div className="header__links"><Link to='/new'>Add A New Secret</Link>     
    //         <Link to='/'>Home</Link></div>
    //     </header>
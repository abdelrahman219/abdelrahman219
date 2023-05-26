import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
function Mynav() {
    return (
        <div><Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    <NavLink className='nav-link' to="/products">Products</NavLink>
                    <NavLink className='nav-link' to="/products/0/edit">Add Product</NavLink>
                    <NavLink className='nav-link' to="/products/1/edit">Edit Product</NavLink>
                </Nav>
            </Container>
        </Navbar></div>
    )
}

export default Mynav
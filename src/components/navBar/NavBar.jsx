import React from 'react'
import { Navbar, Container, Nav, NavDropdown,Offcanvas,Form,FormControl,Button } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-de" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">Digital Eye</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#horarios">Horarios</Nav.Link>
                        <Nav.Link href="#certificciones">Certificaciones</Nav.Link>
                        <Nav.Link href="#cursos">Cursos</Nav.Link>
                        <Nav.Link href="#carreras">Lineas de carrera</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar
/*
<Navbar bg="light" expand={false}>
<Container fluid>
<Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
<Navbar.Toggle aria-controls="offcanvasNavbar" />
<Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
    <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
        </Form>
    </Offcanvas.Body>
</Navbar.Offcanvas>
</Container>
</Navbar>
*/
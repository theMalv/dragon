import React, { useContext } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user.provider';
import { LogoutButton } from './LogoutButton';



export const NavigationFooter: React.FC = () => {
  const { state } = useContext(UserContext)
    
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">DRAKON IDE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Редактор</Nav.Link>
                    <Nav.Link as={Link} to="/curators">Управление</Nav.Link>
                    <Nav.Link as={Link} to="/docs">Документация</Nav.Link>
                    <Nav.Link as={Link} to="/about">О программе</Nav.Link>
                </Nav>
                <Form inline>
                    <Navbar.Brand aria-disabled href="/curators">{state.username}</Navbar.Brand>
                    <Nav.Link as={Link} to="/curators">{state.role}</Nav.Link>
                    <LogoutButton />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
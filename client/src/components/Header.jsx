import React from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css';
import { GiHeartBottle } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.css';
import {Nav,Navbar,Container} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header(){
    return(
        <div className="header">
            <Navbar variant="light" fixed="top" expand="lg" className="animate-navbar" collapseOnSelect>
                <Container>
                <Navbar.Brand>
                    BePositive
                    <i><GiHeartBottle size={30} /></i>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <NavDropdown title="DONATE BLOOD">
                            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/list">FIND A DONOR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;
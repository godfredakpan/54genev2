import React from 'react';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from '../../img/logo.png';
import '../../App.css'
// console.log(Logo);

// import Logo from '../../public/img/54gene.png';

function Header() {
  return (
    <div>
      <Navbar sticky="top"   collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand className="brand-image" href="#home"><img alt="54gene" src={Logo} width="150px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            
            </Nav>
            <Nav>
            <Nav.Link className="mynav" href="#features">Home</Nav.Link>
            <NavDropdown className="mynav" title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mynav" href="#pricing">Corporate</Nav.Link>
            <Nav.Link className="mynav" href="#features">Consumers</Nav.Link>
            <Nav.Link className="mynav" href="#pricing">Research</Nav.Link>
            <Nav.Link className="mynav" href="#pricing">Clinical Trials</Nav.Link>
            </Nav>

        </Navbar.Collapse>
        </Navbar>
    </div>
    
  );
}

export default Header;

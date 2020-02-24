import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import Logo from '../../img/logofooter.svg';
import '../../App.css'

// console.log(Logo);

// import Logo from '../../public/img/54gene.png';

function Header() {
  return (
    <div className="footer">
      <Navbar sticky="top" className="footer-background"   collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand className="brand-image" href="#home"><img alt="54gene" src={Logo} width="40px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className="mynav" href="#features">FAQ</Nav.Link>
            <Nav.Link className="mynav" href="#features">Blog</Nav.Link>
            <Nav.Link className="mynav" href="#features">Press</Nav.Link>
            <Nav.Link className="mynav" href="#features">Terms of Service</Nav.Link>
            <Nav.Link className="mynav" href="#features">Privacy Statement</Nav.Link>
            </Nav>
            <Nav>
            
            <Nav.Link className="black"  href="#features"><i class="fa fa-twitter" aria-hidden="true"></i></Nav.Link>
            <Nav.Link className="black"  href="#pricing"><i class="fa fa-facebook" aria-hidden="true"></i></Nav.Link>
            <Nav.Link className="black"  href="#pricing"><i class="fa fa-linkedin" aria-hidden="true"></i></Nav.Link>
            <Nav.Link className="black"  href="#pricing"><i class="fa fa-instagram" aria-hidden="true"></i></Nav.Link>
            </Nav>

        </Navbar.Collapse>
        </Navbar>
    </div>
    
  );
}

export default Header;

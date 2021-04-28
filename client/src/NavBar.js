import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import userLogo from './img/newuser.png';

const NavBar = () => {
    return ( 

      <Navbar className="shadow" bg="white" expand="lg">
        <div className="container">
        <Navbar.Brand className="LogoMenu mr-5" href="#home"><span className="l">L</span>earn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto tasks-profile">
          <Nav.Link className="mr-3" href="#home">Tasks</Nav.Link>
          <Nav.Link href="#link">Profile</Nav.Link>
        </Nav>

        <Nav>
        <NavDropdown title={<img src={userLogo} />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
        </div>
      
    </Navbar>
       
     );
}
 
export default NavBar;
import { useState } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import userLogo from './img/newuser.png';


const NavBar = () => {

    const history = useHistory();
    const handleClick = () =>{
      localStorage.removeItem('user');
      history.push('/');
    }
    return ( 

      <Navbar className="shadow" bg="white" expand="lg">
        <div className="container container-navbar">
        <Navbar.Brand className="LogoMenu mr-5" href="/home"><span className="l">L</span>earn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto tasks-profile">
          <NavLink className="mr-3" to="/home" activeClassName="active">Tasks</NavLink>
          <NavLink to="/mytasks" activeClassName="active">My Tasks</NavLink>
          
        </Nav>
 
        <Nav>
        <h5 className="my-lg-auto my-4 mr-3 navbar-points"><span>2000</span> Points</h5>
        <NavDropdown title={<img src={userLogo} />} id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <button className="logout dropdown-item" onClick={handleClick}>Logout</button>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
        </div>
    </Navbar>
       
     );
}
 
export default NavBar;
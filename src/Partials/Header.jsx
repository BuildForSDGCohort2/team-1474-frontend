import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import LoginForm from './Login';
import SignupForm from './Signup';
import logo from '../Assets/Images/icons/logo.svg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginOpened: false,
      signupOpened: false,
    };
  }

  render() {
    const { loginOpened, signupOpened } = this.state;
    return (
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="navbar">
        <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{ height: '40px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav menu-header-active" active href="#deets">Home</Nav.Link>
            <Nav.Link className="nav" href="#deets">Services</Nav.Link>
            <Nav.Link className="nav" href="#deets">Contacts</Nav.Link>
            <Nav.Link className="nav" eventKey={2} href="#memes">
              About
            </Nav.Link>
            <button type="button" className="login-btn" onClick={() => { this.setState({ loginOpened: !loginOpened, signupOpened: false }); }}>Login</button>
            <button type="button" className="signup-btn" onClick={() => { this.setState({ signupOpened: !signupOpened, loginOpened: false }); }}>Signup</button>
          </Nav>
        </Navbar.Collapse>
        {loginOpened && <LoginForm />}
        {signupOpened && <SignupForm />}
      </Navbar>
    );
  }
}

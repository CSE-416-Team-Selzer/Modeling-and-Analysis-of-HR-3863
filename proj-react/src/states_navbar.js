import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Note: Lift state to determine if a state has been selected; if we navigate back to the homepage, it's not.
class StatesNavbar extends React.Component {
  constructor(props){
    super(props)
    if(this.props.stateSelect == null){
      this.props.stateSelect = true;
    }
    this.state={
      stateSelect: this.props.stateSelect,
    }
  }
  render(){
    return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">CSE416 Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="States"
              menuVariant="dark"
            >
              <NavDropdown.Item href="arizona">Arizona</NavDropdown.Item>
              <NavDropdown.Item href="texas">Texas</NavDropdown.Item>
              <NavDropdown.Item href="utah">Utah</NavDropdown.Item>
            </NavDropdown>
            {
              this.state.stateSelect ? 
              <>
                <Nav.Link href="elec">Elections</Nav.Link>
                <Nav.Link href="demo">Demographics</Nav.Link>
              </> : <></>
            }
            <Nav.Link href="src">Sources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default StatesNavbar;
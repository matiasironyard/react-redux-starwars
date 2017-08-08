import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, MenuItem, NavDropdown, Nav, NavItem} from 'react-bootstrap';

export default class BaseLayout extends Component {

  render() {

    return (
      <div className="app">
        <Navbar inverse collapseOnSelect className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink activeStyle={{
                color: "yellow"
              }} to="/">
                REACT | REDUX | SWAPI Explorer
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavLink className="nav-links" activeClassName="selected" to="/people">People</NavLink>
              <NavLink className="nav-links" activeClassName="selected" to="/starships">Starships</NavLink>
              <NavLink className="nav-links" activeClassName="selected" to="/films">Films</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container-fluid">
          {this.props.children}
        </div>

        <footer className="container-fluid">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <span>
              SWAPI EXPLORER | REACT | REDUX
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
      <div className="app">
        <div className="row">
          <div className="col">
            <Navbar color="faded" className="apiNav" light toggleable>
              <NavbarToggler right onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/" className="nav-links">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="nav-links" to="/people">People</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="nav-links" to="/starships">Starships</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="nav-links" to="/films">Films</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>

        <div className="container-fluid">
          {this.props.children}
        </div>

        <footer className="container-fluid">
          <div className="row">
            <div className="col">
              <span>
                SWAPI EXPLORER | REACT | REDUX
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  inverse: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

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

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mainNav">
              <NavLink className="navbar-brand" tag={Link} to="/">SWAPI EXPLORER</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                      <NavLink tag={Link}   to="/people">People</NavLink>
                  </li>
                  <li className="nav-item active">
                      <NavLink tag={Link}  to="/starships">Starships</NavLink>
                  </li>
                  <li className="nav-item active">
                      <NavLink tag={Link}  to="/films">Films</NavLink>
                  </li>
                </ul>
              </div>
            </nav>





        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="app-body col">
              {this.props.children}
            </div>
          </div>
        </div>

        <footer className="container-fluid">
          <div className="row justify-content-center">
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

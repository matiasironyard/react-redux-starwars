import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavLink} from 'reactstrap';
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
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="navbar-brand" tag={Link} to="/">Home</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink tag={Link} to="/people">People</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink tag={Link} to="/starships">Starships</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink tag={Link} to="/films">Films</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <main className="row justify-content-center no-gutters">
          {this.props.children}
        </main>

        <div className="row justify-content-center no-gutters">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link disabled" href="">SWAPI EXPLORER | REACT | REDUX</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.matiasmariani.io" target="_blank" rel="noopener noreferrer">By Matias Mariani</a>
            </li>
          </ul>
        </div>
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

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Button, Navbar} from 'react-bootstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class NavBar extends Component {
  render() {
    let previous;
    if (this.props.previous) {
      previous = <NavItem onClick={() => this.props.fetchPeople(this.props.previous)} value={this.props.previous}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </NavItem>
    }
    let next;
    if (this.props.next) {
      next = <NavItem onClick={() => this.props.fetchPeople(this.props.next)} value={this.props.previous}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </NavItem>
    }
    return (

          <Navbar inverse className="apiNav col-lg-10 col-lg-offset-1">
            <Nav>
              {previous}
              {next}
            </Nav>
          </Navbar>

    )
  }
}
export default NavBar;

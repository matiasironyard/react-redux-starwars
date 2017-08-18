/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  NavLink,
} from 'reactstrap';


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class NavCards extends Component {
  render() {

    return (
      <div className="col main-card ">
        <div className="card-header">
          Swapi Endpoints
        </div>
        <div className="row nav-cards">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">People</h4>
                <p className="card-text"></p>
                <NavLink className="btn btn-primary" tag={Link} to="/people">People</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Starships</h4>
                <p className="card-text"></p>
                <NavLink className="btn btn-primary" tag={Link} to="/starships">People</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Vehicles</h4>
                <p className="card-text"></p>
                <NavLink className="btn btn-primary" tag={Link} to="" disabled>People</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Worlds</h4>
                <p className="card-text"></p>
                <NavLink className="btn btn-primary" tag={Link} to="" disabled>Worlds</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Species</h4>
                <p className="card-text"></p>
                <NavLink className="btn btn-primary" tag={Link} to="" disabled>Species</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Films</h4>
                <p className="card-text"></p>
                <NavLink className="btn btn-primary" tag={Link} to="/films">Films</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default NavCards;

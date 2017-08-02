import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Explorer extends Component {

  render() {

    return (
      <div className="row">
        <div className="app-body offset col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
          <Link
            to="/people/"
            className="col-lg-3 col-md-3 col-xs-12 tiles people-tile">
          </Link>
          <Link
            to="/starships/"
            className="col-lg-3 col-md-3 col-xs-12 tiles starship-tile">
          </Link>
          <Link
            to="/films/"
            className="col-lg-3 col-md-3 col-xs-12 tiles film-tile">
          </Link>
        </div>
      </div>
    );
  }
}

export default Explorer;

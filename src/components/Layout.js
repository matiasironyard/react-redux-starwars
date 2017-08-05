import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    // INLINE STYLING
    let headerStyle = {
      "textAlign": "center",
      "height": "35vw",
      "color": "#fff",
      "backgroundImage": "url(http://www.bromygod.com/wp-content/uploads/2015/12/4AvKUxn.png)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px"
    }
    return (
      <div className="container-fluid">

        <nav className="navbar navbar-inverse row">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink activeStyle={{
                    color: "yellow"
                  }} to="/">
                    REACT | REDUX | SWAPI Explorer
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/people">People</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/starships">
                    <span>Starships
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/films">
                    <span>Films
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="row">
          <div className="col-lg-12 header" style={headerStyle}>
            <div className="starwars">
              <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star"/>
              <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars"/>
              <h2 className="byline" id="byline">
                api explorer
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {this.props.children}
        </div>

        <footer className="row">
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

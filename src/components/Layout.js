import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    // INLINE STYLING
    let headerStyle = {
      "textAlign": "center",
      "height": "35vw",
      "color": "#fff",
      "backgroundImage": "url(./images/space.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink
                    activeStyle={{
                      color: "yellow"
                    }}
                    to="/">
                    SWAPI Explorer
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/people">People</NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="selected"
                    to="/starships">
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
                <li>
                  <NavLink activeClassName="selected" to="/comingsoon">
                    <span>Coming Soon!
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="starwars">
              <img
                src="//cssanimation.rocks/demo/starwars/images/star.svg"
                alt="Star"/>
              <img
                src="//cssanimation.rocks/demo/starwars/images/wars.svg"
                alt="Wars"/>
              <h2 className="byline" id="byline">
                api explorer
              </h2>
            </div>
          </div>
        </nav>
        {/*
          PASS IN CHILDREN
          */}
          {this.props.children}
          <footer className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <span>
                SWAPI EXPLORER
              </span>
            </div>
          </footer>
        </div>
    );
  }
}

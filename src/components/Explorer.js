import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class Explorer extends Component {

  render() {
    let headerStyle = {
      "textAlign": "center",
      "height": "45vw",
      "color": "#fff",
      "backgroundImage": "url(http://www.bromygod.com/wp-content/uploads/2015/12/4AvKUxn.png)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }

    return (
      <div className="explorer row">
        <div className="header" style={headerStyle}>
          <div className="starwars">
            <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star"/>
            <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars"/>
            <h2 className="byline" id="byline">
              api explorer
            </h2>
          </div>
        </div>

        <div className="explorer-nav offset col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
          <Link to="/people/" className="">
            <Button className="explorer-nav-btn">
              People
            </Button>
          </Link>
          <Link to="/starships/" className="">
            <Button className="explorer-nav-btn">
              Starships
            </Button>
          </Link>
          <Link to="/films/" className="">
            <Button className="explorer-nav-btn">
              Films
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Explorer;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px"
    }

    return (
      <div>
        <div className="explorer row">
          <div className="header col" style={headerStyle}>
            <div className="fade"></div>

            <section className="star-wars">

              <div className="crawl">

                <div className="title">
                  <p>SWAPI EXPLORER</p>
                  <h1>Powered by React & Redux</h1>
                </div>

                <p>In a galaxy far away, a lonely coder set out to create a React Redux SWAPI explorer. The end result is still to be seen, but good progress has been made.</p>
                <p>What is SWAPI?</p>
                <p>The Star Wars API is the world's first quantified and programmatically-formatted set of Star Wars data. After hours of watching films and trawling through content online, we present to you all the People, Films, Species, Starships, Vehicles and Planets from Star Wars. We've formatted this data in JSON and exposed it to you in a RESTish implementation that allows you to programmatically collect and measure the data.</p>
                <a href="https://swapi.co/about">swapi.co</a>

              </div>

            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default Explorer;

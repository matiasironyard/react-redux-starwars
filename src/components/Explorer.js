import React, {Component} from 'react';

class Explorer extends Component {

  render() {
    let headerStyle = {
      "textAlign": "center",
      "height": "45vw",
      "color": "#fff",
      "backgroundColor": "#000",
      "backgroundImage": "url(https://solarsystem.nasa.gov/kids/images/layers/png/background.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px"
    }

    return (
      <div style={headerStyle}>
        <div className="explorer row justify-content-center">
          <div className="header col-fluid">
            <div className="fade"></div>

            <section className="star-wars">
              <div className="crawl">
                <div className="title">
                  <p>SWAPI EXPLORER</p>
                  <h1>Powered by React and Redux</h1>
                </div>

                <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>

                <p>During the battle, a Rebel coder stumbled upon an awesome database,
                  <a href="https://swapi.co">Swapi</a>, and he decided to create an app for it, powered by the awesome force of React and Redux.
                </p>

                <p>Pursued by his passion for coding, this developer aims to create a great and clean user experience. Focusing on a minimalistic design, coupled with intuitive design and data filters, this Rebel coder hopes to create a key tool in the demise of the evil Galactic Empire.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default Explorer;

import React, {Component} from 'react';

class Explorer extends Component {

  render() {
    let headerStyle = {
      "textAlign": "center",
      "height": "45vw",
      "color": "#fff",
      "backgroundImage": "url(https://solarsystem.nasa.gov/kids/images/layers/png/background.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px"
    }

    return (
      <div>
        <div className="explorer row justify-content-center">
          <div className="header col-fluid" style={headerStyle}>
            <div className="fade"></div>

            <section className="star-wars">
              <div className="crawl">
                <div className="title">
                  <p>Episode IV</p>
                  <h1>A New Hope</h1>
                </div>

                <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>

                <p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>

                <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default Explorer;

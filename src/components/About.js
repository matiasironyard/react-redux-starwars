/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class About extends Component {
  render() {

    return (
      <div className="col main-card">
        <div className="card text-center">
          <div className="card-header">
            About
          </div>
          <div className="card-body">
            <h4 className="card-title">SWAP Explorer</h4>
            <p className="card-text">The SWAPI Explorer came about when creating a project for the students at The Iron Yard. The purpose was to implement React and Redux in order to create a simple, but yet powerful, UI for the swapi database. The app helps users explore each endpoint of the database while creating associations between endpoints. I also implemented a filter in order to sort out endpoints based on similar attributes.</p>

            <p>I implemented a second API in order to retrieve movie posters when viewing the 'details' page for the movies.</p>
          </div>
          <div className="card-footer text-muted">
            <a href="https://github.com/matiasironyard/react-redux-starwars" target="_blank">Read Me</a>
          </div>
        </div>
      </div>
    )
  }
}
export default About;

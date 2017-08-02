import React, {Component} from 'react';
// Import connect
import {connect} from 'react-redux';
// Import action
import {
  setDetails,
  fetchStarships,
  fetchDetails
} from '../actions/index';
// Import component
import StarshipsList from '../components/Starships';
// Import bindActionCreators
import {bindActionCreators} from 'redux';

class Starships extends Component {

  componentWillMount(){
    this.props.fetchStarships('https://swapi.co/api/starships/')
  }

  render() {
    return (
      <div className="row">
        <div className="app-body offset col-lg-10 col-lg-offset-1">
          <StarshipsList
            starships={this.props.starships}
            starshipModel={this.props.starshipModel}
            setDetails={this.props.setDetails}
            fetchDetails={this.props.fetchDetails}/>
        </div>
      </div>
    );
  }
}

// Here we map component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  return {
    starships: state.starships,
  };
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({
    setDetails: setDetails,
    fetchStarships: fetchStarships,
    fetchDetails: fetchDetails
  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(Starships);

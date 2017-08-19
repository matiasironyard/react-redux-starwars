/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REDUX IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import {connect} from 'react-redux';
import {fetchStarships, fetchDetails, filterFilms, filterPilots, stateReset} from '../actions/index';

import {bindActionCreators} from 'redux';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import StarshipsList from '../components/Starships';
import NavBar from '../components/Navbar';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class Starships extends Component {

  render() {
    return (
      <div className="col app-body">
        <NavBar next={this.props.next} previous={this.props.previous} home={'https://swapi.co/api/starships/?page=1'} fetch={this.props.fetchStarships} stateReset={this.props.stateReset} counter = {this.props.starships.length} loading={this.props.loading}/>
        <StarshipsList fetchStarships={this.props.fetchStarships} starships={this.props.starships} filterFilms={this.props.filterFilms} stateReset={this.props.stateReset} starshipModel={this.props.starshipModel} setDetails={this.props.setDetails} filterPilots={this.props.filterPilots} fetchDetails={this.props.fetchDetails}/>
      </div>
    );
  }
}

// Here we map component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  let data;
  if (state.data.filter.key === "film") {
    let endpoint = state.data.filter.endpoint;
    let match = state.data.StarshipsData.filter((matchedFilms) => {
      let films = matchedFilms.films;
      return films.filter((item) => {
        return item;
      }).length === endpoint.length;
    });
    data = match;
  } else if (state.data.filter.key === "pilot") {
    let endpoint = state.data.filter.endpoint;
    let match = state.data.StarshipsData.filter((matchedPilots) => {
      let pilots = matchedPilots.pilots;
      return pilots.filter((item) => {
        return item;
      }).length === endpoint.length
    })
    data = match;
  } else if (state.data.filter.key === "all") {
    data = state.data.StarshipsData;
  } else {
    data = state.data.StarshipsData;
  }
  return {starships: data.sort(), next: state.data.next, previous: state.data.previous, loading: state.data.loading};
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({
    fetchStarships: fetchStarships,
    filterFilms: filterFilms,
    filterPilots: filterPilots,
    fetchDetails: fetchDetails,
    stateReset: stateReset
  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(Starships);

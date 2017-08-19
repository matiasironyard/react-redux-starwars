/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REDUX IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import {connect} from 'react-redux';
import {
fetchFilms,
fetchReviews,
fetchDetails,
filterWorlds,
filterFilms,
filterStarships,
filterVehicles,
filterSpecies,
fetchPeople,
stateReset} from '../actions/index';
// Import bindActionCreators
import {bindActionCreators} from 'redux';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import FilmsList from '../components/Films';
import NavBar from '../components/Navbar';

class Films extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this)
  };
  handleBack() {
    return this.props.history.goBack();
  };

  componentDidMount() {
    this.props.fetchFilms('https://swapi.co/api/films/')
  }

  render() {

    return (
      <div className="col app-body">
        <NavBar back={this.handleBack} stateReset={this.props.stateReset} loading={this.props.loading}/>
        <FilmsList fetchPeople={this.props.fetchPeople} films={this.props.films} filmDirector={this.props.filmDirector} setDetails={this.props.setDetails} endpoint={this.props.match.params.endpoint} fetchFilms={this.props.fetchFilms} fetchReviews={this.props.fetchReviews} reviews={this.props.reviews} fetchDetails={this.props.fetchDetails} filter={this.props.filterWorlds} stateReset={this.props.stateReset} filterFilms={this.props.filterFilms} filterStarships={this.props.filterStarships} filterSpecies={this.props.filterSpecies} filterVehicles={this.props.filterVehicles}/>
      </div>
    );
  }
}

// Here we map component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  let data;
  if (state.data.filter.key === "homeworld") {
    let endpoint = state.data.filter.endpoint;
    let match = state.data.FilmsData.filter((matchedWorlds) => {
      return matchedWorlds.homeworld === endpoint
    });
    data = match;
  } else if (state.data.filter.key === "film") {
    let endpoint = state.data.filter.endpoint;
    let match = state.data.FilmsData.filter((matchedFilms) => {
      let films = matchedFilms.films;
      return films.filter((item) => {
        return item;
      }).length === endpoint.length;
    });
    data = match;
  } else if (state.data.filter.key === "vehicles") {
    let endpoint = state.data.filter.endpoint;
    let match = state.data.FilmsData.filter((matchedVehicles) => {
      let vehicles = matchedVehicles.vehicles;
      return vehicles.filter((item) => {
        return item;
      }).length === endpoint.length;
    });
    data = match;
  } else if (state.data.filter.key === "species") {
    let endpoint = state.data.filter.endpoint[0];
    let match = state.data.FilmsData.filter((matchedSpecies) => {
      return matchedSpecies.species[0] === endpoint
    });
    data = match;
  } else if (state.data.filter.key === "starship") {
    let endpoint = state.data.filter.endpoint;

    let match = state.data.FilmsData.filter((matchedStarship) => {
      let starships = matchedStarship.starships;
      return starships.filter((item) => {
        return item;
      }).length === endpoint.length;
    });
    data = match;
  } else if (state.data.filter.key === "all") {
    data = state.data.FilmsData;
  } else {
    data = state.data.FilmsData;
  }
  return {films: data.sort(),  reviews: state.reviews, loading: state.data.loading};
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({
    fetchFilms: fetchFilms,
    fetchReviews: fetchReviews,
    fetchDetails: fetchDetails,
    filterWorlds: filterWorlds,
    filterFilms: filterFilms,
    filterStarships: filterStarships,
    filterSpecies: filterSpecies,
    filterVehicles: filterWorlds,
    stateReset: stateReset
  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'Films.'
export default connect(mapStateToProps, mapDispatchToProps)(Films);

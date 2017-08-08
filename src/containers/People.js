/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Nav, NavItem, Button} from 'react-bootstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REDUX IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import {connect} from 'react-redux';
import {
  filterWorlds,
  filterFilms,
  filterStarships,
  fetchPeople,
  fetchDetails,
  toggleColor,
  stateReset
} from '../actions/index';
import {bindActionCreators} from 'redux';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import PeopleList from '../components/People';
import NavBar from '../components/Navbar';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class People extends Component {

  render() {
    return (

      <div className="row">
        <NavBar next={this.props.next} previous={this.props.previous} fetchPeople={this.props.fetchPeople}/>
        <div className="app-body  col-lg-10 col-lg-offset-1">
          {/*State is now available via props thanks to Redux! <<<<<<<<<<<<<<<<*/}
          <PeopleList people={this.props.people} filter={this.props.filterWorlds} stateReset={this.props.stateReset} filterFilms={this.props.filterFilms} filterStarships={this.props.filterStarships} setDetails={this.props.setDetails} fetchPeople={this.props.fetchPeople} fetchDetails={this.props.fetchDetails} toggleColor={this.props.toggleColor} iconColor={this.props.iconColor} next={this.props.next} previous={this.props.previous}/>
        </div>
        <NavBar next={this.props.next} previous={this.props.previous} fetchPeople={this.props.fetchPeople}/>
      </div>
    );
  }
}

// Here we map component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  let data;
  if (state.people.filter.key === "homeworld") {
    let endpoint = state.people.filter.endpoint;
    let match = state.people.data.filter((matchedWorlds) => {
      return matchedWorlds.homeworld === endpoint
    })
    data = match;
  } else if (state.people.filter.key === "film") {
    let endpoint = state.people.filter.endpoint;
    let match = state.people.data.filter((matchedFilms) => {
      let films = matchedFilms.films;
      return films.filter((item) => {
        return item;
      }).length === endpoint.length;
    });
    data = match;
  } else if (state.people.filter.key === "starship") {
    let endpoint = state.people.filter.endpoint;
    let match = state.people.data.filter((matchedStarship) => {
      let starships = matchedStarship.starships;
      return starships.filter((item) => {
        return item;
      }).length === endpoint.length;
    });
    data = match;
  } else if (state.people.filter.key === "all") {
    data = state.people.data;
  } else {
    data = state.people.data;
  }
  return {people: data, next: state.people.next, previous: state.people.previous};
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({
    filterWorlds: filterWorlds,
    filterFilms: filterFilms,
    filterStarships: filterStarships,
    stateReset: stateReset,
    fetchPeople: fetchPeople,

  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(People);

import React, {Component} from 'react';
// Import connect
import {connect} from 'react-redux';
// Import action
import {
  filterWorlds,
  filterFilms,
  filterStarships,
  stateToggle,
  setDetails,
  fetchPeople,
  fetchDetails,
} from '../actions/index';
// Import component
import PeopleList from '../components/People';
// Import bindActionCreators
import {bindActionCreators} from 'redux';

class People extends Component {

componentWillMount(){
  this.props.fetchPeople('https://swapi.co/api/people/')
}



  render() {
    console.log('REACT: Rendering People...', this.props.history)
    return (
      <div className="row">
        <div className="app-body offset col-lg-10 col-lg-offset-1">
          {/*State is now available via props thanks to Redux! <<<<<<<<<<<<<<<<*/}
          <PeopleList
            people={this.props.people}
            homeworld={this.props.homeWorld}
            filter={this.props.filterWorlds}
            stateToggle={this.props.stateToggle}
            filterFilms={this.props.filterFilms}
            filterStarships={this.props.filterStarships}
            setDetails={this.props.setDetails}
            fetchPeople={this.props.fetchPeople}
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
    people: state.people,
    setDetails: state.setDetails,
  };
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
    stateToggle: stateToggle,
    setDetails: setDetails,
    fetchPeople: fetchPeople,
    fetchDetails: fetchDetails,

  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(People);

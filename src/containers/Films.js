/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REDUX IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import {connect} from 'react-redux';
import {fetchFilms, fetchReviews, fetchDetails} from '../actions/index';
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
      <div className="col-fluid app-body">
        <NavBar back={this.handleBack}/>
        <FilmsList fetchPeople={this.props.fetchPeople} films={this.props.films} filmDirector={this.props.filmDirector} setDetails={this.props.setDetails} endpoint={this.props.match.params.endpoint} fetchFilms={this.props.fetchFilms} fetchReviews={this.props.fetchReviews} reviews={this.props.reviews} fetchDetails={this.props.fetchDetails}/>
      </div>
    );
  }
}

// Here we map component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  return {films: state.data.FilmsData, reviews: state.reviews};
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({
    fetchFilms: fetchFilms,
    fetchReviews: fetchReviews,
    fetchDetails: fetchDetails
  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'Films.'
export default connect(mapStateToProps, mapDispatchToProps)(Films);

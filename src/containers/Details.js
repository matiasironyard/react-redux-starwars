/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REDUX IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import {connect} from 'react-redux';
import {fetchDetails, fetchReviews} from '../actions/index';
import {bindActionCreators} from 'redux';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import View from '../components/View';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class Details extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this)
  };
  handleBack() {
    return this.props.history.goBack();
  };

  render() {
    return (
      <div className="app-body col">
        <View details={this.props.details} reviews={this.props.reviews} fetchDetails={this.props.fetchDetails} fetchReviews={this.props.fetchReviews} id={this.props.match.params.id} index={this.props.match.params.index} title={this.props.match.params.title} back={this.handleBack}/>
      </div>
    );
  }
}

// Here we map component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  return {people: state.people, films: state.films, starships: state.starships, details: state.details, reviews: state.reviews};
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({
    fetchDetails: fetchDetails,
    fetchReviews: fetchReviews
  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(Details);

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REDUX IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import {connect} from 'react-redux';
import {fetchDetails,  fetchReviews} from '../actions/index';
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
      <div className="row">
        <div className="app-body  col-l10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1 className="headings">
              {this.props.details.model || this.props.details.name || this.props.details.title}
            </h1>
          </div>
          <View
            details={this.props.details}
            reviews={this.props.reviews}
            fetchDetails={this.props.fetchDetails}
            fetchReviews={this.props.fetchReviews}
            id={this.props.match.params.id}
            index={this.props.match.params.index}
            title={this.props.match.params.title}/>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <button
              className="btn btn-primary pull-right"
              onClick={this.handleBack}>
              <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
            </button>
          </div>
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
    films: state.films,
    starships: state.starships,
    details: state.details,
    reviews: state.reviews
  };
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({
    fetchDetails: fetchDetails,
    fetchReviews: fetchReviews,
  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(Details);

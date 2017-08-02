import React, {Component} from 'react';
// Import connect
import {connect} from 'react-redux';
// Import component
import View from '../components/View';

class Details extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this)
  };
  handleBack() {
    return this.props.history.goBack();
  };

  render() {
    console.log("Details container props: ", this.props)
    return (
      <div className="row">
        <div className="app-body offset col-l10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1>
              {this.props.details.model || this.props.details.name || this.props.details.title}
            </h1>
          </div>
          <View
            details={this.props.details}
            endpoint={this.props.match.params.id}/>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <button
              className="btn btn-primary"
              onClick={this.handleBack}>
              Go Back
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
    details: state.details};
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps)(Details);

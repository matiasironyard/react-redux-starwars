/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Pagination, PaginationLink, PaginationItem} from 'reactstrap'

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      previousDisabled: "disabled",
      nextDisabled: ""
    }
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }
  handlePrevious = (e) => {
    this.props.fetchPeople(this.props.previous)
    if (this.state.page <= 2) {
      this.setState({
        page: this.state.page = 1,
        previousDisabled: "disabled"
      })
    } else {
      this.props.fetchPeople(this.props.previous)
      this.setState({
        page: this.state.page - 1
      })
    }
  }
  handleNext = (e) => {
    if (this.props.next == null && this.props.previous != null) {
      this.setState({page: this.state.page, previousDisabled: "", nextDisabled: "disabled"})
    } else if (this.props.next == null) {
      this.setState({nextDisabled: ""})
    } else {
      this.props.fetchPeople(this.props.next)
      this.setState({
        page: this.state.page + 1,
        nextDisabled: "",
        previousDisabled: ""
      })
    }
  }
  handleHome = (e) => {
    this.setState({page: 1, previousDisabled: "hide", nextHiding: "show"})
  }

  render() {
    let reset = this.props.stateReset;

    return (
      <div className="apiNav row">
      <div className="col">
        <Pagination className="pull-right">
          <PaginationItem className={this.state.previousDisabled}>
            <PaginationLink previous onClick={() => this.handlePrevious()}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>
              {this.state.page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => this.props.fetchPeople(this.props.home) + this.handleHome() + reset('all')}>Home
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={this.state.nextDisabled}>
            <PaginationLink next onClick={() => this.handleNext()}/>
          </PaginationItem>
        </Pagination>
      </div>
      </div>
    )
  }
}
export default NavBar;

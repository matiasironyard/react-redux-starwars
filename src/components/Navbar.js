/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Pagination, PaginationLink, PaginationItem} from 'reactstrap'

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state={
      page: 1,
    }
    this.handlePrevious=this.handlePrevious.bind(this);
    this.handleNext=this.handleNext.bind(this);
  }
  handlePrevious = (e) => {
    if(this.state.page <= 1){
      this.setState({page: this.state.page = 1})
    } else {
      this.setState({page: this.state.page -1 })
    }
    }
    handleNext = (e) => {
      if(this.props.next == null){
        this.setState({page: this.state.page})
      } else {
        this.setState({page: this.state.page + 1 })

      }
      }

  render() {

    return (
      <div className="apiNav col-10 offset-1">
        <Pagination className="pull-right">
          <PaginationItem>
            <PaginationLink previous onClick={() => this.props.fetchPeople(this.props.previous) + this.handlePrevious()} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>
              Page {this.state.page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next onClick={() => this.props.fetchPeople(this.props.next) + this.handleNext()}/>
          </PaginationItem>
        </Pagination>
      </div>
    )
  }
}
export default NavBar;

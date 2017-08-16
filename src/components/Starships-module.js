/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import ImageSearch from '../components/Imagesearch';
import {Link} from 'react-router-dom';
import {Nav, UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class StarshipsModule extends Component {
  render(){
    let starshipsEndpoint = this.props.starshipsEndpoint;
    let index = this.props.index;
    let starships = this.props.starships;
    let key = Math.random();
    return(
      <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${starshipsEndpoint}`}>
        <span onClick={() => this.props.fetchDetails(starships)}>{!index ? 'None' : index}</span>
      </DropdownItem>
    )
  }
}

export default StarshipsModule

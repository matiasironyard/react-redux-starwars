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

class VehiclesModule extends Component {
  render(){
      let vehiclesEndpoint = this.props.vehiclesEndpoint;
      let index = this.props.index;
      let key = Math.random()
    return(
      <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${vehiclesEndpoint}`}>
              <span>{index}</span>
      </DropdownItem>
    )
  }
}

export default VehiclesModule

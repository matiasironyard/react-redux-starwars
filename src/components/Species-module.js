/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {DropdownItem} from 'reactstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class SpeciesModule extends Component {
  render(){
    let speciesEndpoint = this.props.speciesEndpoint;
    let index = this.props.index;
    let key = Math.random();
    return(
      <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${speciesEndpoint}`}>
              <span>{index}</span>
      </DropdownItem>
    )
  }
}

export default SpeciesModule

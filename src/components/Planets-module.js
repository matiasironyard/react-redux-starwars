/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {DropdownItem} from 'reactstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class PlanetsModule extends Component {
  render(){
      let homeworld = this.props.homeworld;
      let homeworldEndpoint = homeworld.substr(homeworld.indexOf("/api/")+5);
      let index = homeworld.split('/').slice(-2)[0]
      let key = Math.random()
    return(
      <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${homeworldEndpoint}`}>
              <span>{index}</span>
      </DropdownItem>
    )
  }
}

export default PlanetsModule

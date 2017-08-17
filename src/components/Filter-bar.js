/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Nav, UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ReactTooltip from 'react-tooltip';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class FilterBar extends Component {
  render() {

    return (

      <div className="instructions col main-card">
        <div className="card-header">
          Easy Navigation
        </div>
        <div className="card-header top-margin">
          <Nav tabs>
            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='homeworld'>
                <ReactTooltip id='homeworld' type='info' effect='solid'>
                  <span>Homeworld</span>
                </ReactTooltip>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  3
                </DropdownItem>
                <DropdownItem>
                  6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledNavDropdown>

            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='films'>
                <ReactTooltip id='films' type='info' effect='solid'>
                  <span>Films</span>
                </ReactTooltip>
                <i className="fa fa-film" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  3
                </DropdownItem>
                <DropdownItem>
                  6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledNavDropdown>

            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='starships'>
                <ReactTooltip id='starships' type='info' effect='solid'>
                  <span>Starships</span>
                </ReactTooltip>
                <i className="fa fa-space-shuttle" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  3
                </DropdownItem>
                <DropdownItem>
                  6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledNavDropdown>

            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='species'>
                <ReactTooltip id='species' type='info' effect='solid'>
                  <span>Species</span>
                </ReactTooltip>
                <i className="fa fa-users" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  3
                </DropdownItem>
                <DropdownItem>
                  6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledNavDropdown>

            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='vehicles'>
                <ReactTooltip id='vehicles' type='info' effect='solid'>
                  <span>Vehicles</span>
                </ReactTooltip>
                <i className="fa fa-fighter-jet" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  3
                </DropdownItem>
                <DropdownItem>
                  6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledNavDropdown>

            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='filter'>
                <ReactTooltip id='filter' type='info' effect='solid'>
                  <span>Filter</span>
                </ReactTooltip>
                <i className="fa fa-filter" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-film" aria-hidden="true"></i>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-space-shuttle" aria-hidden="true"></i>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-users" aria-hidden="true"></i>
                </DropdownItem>
                <DropdownItem >
                  <i className="fa fa-fighter-jet" aria-hidden="true"></i>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-refresh" aria-hidden="true"></i>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledNavDropdown>
          </Nav>
        </div>
      </div>
    )
  }
}

export default FilterBar;

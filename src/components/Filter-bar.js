/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Nav, UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class FilterBar extends Component {

  render() {
    //LOGIC<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    //PEOPLE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let people = this.props.people;

    //HOMEWORLD<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let homeworld = this.props.homeworld;

    //PLANETS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let planets = this.props.planets;

    //SPECIES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let species = this.props.species;

    //STARSHIPS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let starships = this.props.starships;

    //VEHICLES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let vehicles = this.props.vehicles;

    //FILMS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let films = this.props.films;


    return (
 //homeworld films species starships vehicles
      <div>
        <Nav tabs>
          {people ? (
            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='people'>
                <ReactTooltip id='people' type='info' effect='solid'>
                  <span>People</span>
                </ReactTooltip>
                <i className="fa fa-user" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu >
                {people.length >=1 ? (
                  people.sort(),
                  people.map((people) => {
                    let index = people.split('/').slice(-2)[0]
                    let key = Math.random();
                    return <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${"people"}/${index}`}>
                                  <span>{index}</span>
                              </DropdownItem>
                            })
                ):(<DropdownItem>None</DropdownItem>)}
              </DropdownMenu>
            </UncontrolledNavDropdown>
          ):(<span></span>)}
          {homeworld ? (
            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='homeworld'>
                <ReactTooltip id='homeworld' type='info' effect='solid'>
                  <span>Homeworld</span>
                </ReactTooltip>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu >
                {homeworld ? (
                  this.index = homeworld.split('/').slice(-2)[0],
                  this.key = Math.random(),
                  <DropdownItem  key={this.key} tag={Link} to={`/details/${ "endpoint"}/${"homeworld"}/${this.index}`}>
                          <span>{this.index}</span>
                  </DropdownItem>
                  ) : (
                    <DropdownItem>None</DropdownItem>
                  )}
              </DropdownMenu>
            </UncontrolledNavDropdown>
          ):(<span></span>)}

          {planets ? (
            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='planets'>
                <ReactTooltip id='planets' type='info' effect='solid'>
                  <span>Planets</span>
                </ReactTooltip>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu >
                {planets ? (
                  planets.sort(),
                  planets.map((planets) => {
                    let index = planets.split('/').slice(-2)[0];
                    let key = Math.random();
                    return <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${"planets"}/${index}`}>
                                  <span>{index}</span>
                              </DropdownItem>
                            })
                ):(<DropdownItem>None</DropdownItem>)}
              </DropdownMenu>
            </UncontrolledNavDropdown>
          ):(<span></span>)}

          {films ? (
            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='films'>
                <ReactTooltip id='films' type='info' effect='solid'>
                  <span>Films</span>
                </ReactTooltip>
                <i className="fa fa-film" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                {films ? (
                  films.sort(),
                  films.map((films) => {
                    let index = films.split('/').slice(-2)[0];
                    let key = Math.random();
                    let title;
                    switch (index) {
                      case "1":
                        title = "star wars a new hope";
                        break;
                      case "2":
                        title = "The Empire Strikes Back";
                        break;
                      case "3":
                        title = "Return of the Jedi";
                        break;
                      case "4":
                        title = "The Phantom Menace";
                        break;
                      case "5":
                        title = "Attack of the Clones";
                        break;
                      case "6":
                        title = "Revenge of the Sith";
                        break;
                      case "7":
                        title = "The Force Awakens";
                        break;
                      default:
                        title = "Star Wars";
                    }
                    return <DropdownItem key={key} tag={Link} to={`/film-endpoint/${"films"}/${index}/${title}`}>
                      <span onClick={() => this.props.fetchDetails(films)}>{index}</span>
                    </DropdownItem >
                  })
                ):(<DropdownItem>None</DropdownItem>)}
              </DropdownMenu>
            </UncontrolledNavDropdown>
          ):(<span></span>)}

          {starships ? (
            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='starships'>
                <ReactTooltip id='starships' type='info' effect='solid'>
                  <span>Starships</span>
                </ReactTooltip>
                <i className="fa fa-space-shuttle" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                {starships && starships.length > 1? (
                  starships.sort(),
                  starships.map((starships) => {
                    let index = starships.split('/').slice(-2)[0];
                    let key = Math.random();
                    return <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${"starships"}/${index}`}>
                                  <span>{index}</span>
                              </DropdownItem>
                            })
                ):(<DropdownItem>None</DropdownItem>)}
              </DropdownMenu>
            </UncontrolledNavDropdown>
          ):(<span></span>)}

          {species ? (
            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='species'>
                <ReactTooltip id='species' type='info' effect='solid'>
                  <span>Species</span>
                </ReactTooltip>
                <i className="fa fa-users" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                {species ? (
                  species.sort(),
                  species.map((species) => {
                    let index = species.split('/').slice(-2)[0]
                    let key = Math.random()
                    return <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${"species"}/${index}`}>
                                  <span>{index}</span>
                              </DropdownItem>
                  })
                ):(<DropdownItem>None</DropdownItem>)}
              </DropdownMenu>
            </UncontrolledNavDropdown>
          ):(<span></span>)}

          {vehicles ? (
            <UncontrolledNavDropdown>
              <DropdownToggle nav caret data-tip data-for='vehicles'>
                <ReactTooltip id='vehicles' type='info' effect='solid'>
                  <span>Vehicles</span>
                </ReactTooltip>
                <i className="fa fa-fighter-jet" aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu>
                {vehicles && vehicles.length > 1? (
                  vehicles.sort(),
                  vehicles.map((vehicles) => {
                     let index = vehicles.split('/').slice(-2)[0];
                     let key = Math.random();
                     return <DropdownItem key={key} tag={Link} to={`/details/${ "endpoint"}/${"vehicles"}/${index}`}>
                                   <span>{index}</span>
                               </DropdownItem>
                  })
                ):(<DropdownItem>None</DropdownItem>)}
              </DropdownMenu>
            </UncontrolledNavDropdown>
          ):(<span></span>)}

          <UncontrolledNavDropdown>
            <DropdownToggle nav caret data-tip data-for='filter'>
              <ReactTooltip id='filter' type='info' effect='solid'>
                <span>Filter</span>
              </ReactTooltip>
              <i className="fa fa-filter" aria-hidden="true"></i>
            </DropdownToggle>
            <DropdownMenu>
              {this.props.filterWorld ? (
                <DropdownItem onClick={() => this.props.filterWorld(this.props.homeworld, 'homeworld')}>
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <span> Homeworld</span>
                </DropdownItem>
              ):(
                <DropdownItem disabled>
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <span> Homeworld</span>
                </DropdownItem>
              )}
              {this.props.filterFilms ? (
                <DropdownItem onClick={() => this.props.filterFilms(this.props.films, 'film')}>
                  <i className="fa fa-film" aria-hidden="true"></i>
                  <span> Films</span>
                </DropdownItem>
              ):(
                <DropdownItem disabled>
                  <i className="fa fa-film" aria-hidden="true"></i>
                  <span> Films</span>
                </DropdownItem>
              )}
              {this.props.filterStarships ? (
                <DropdownItem onClick={() => this.props.filterStarships(this.props.starships, 'starship')}>
                  <i className="fa fa-space-shuttle" aria-hidden="true"></i>
                  <span> Starships</span>
                </DropdownItem>
              ): (
                <DropdownItem disabled>
                  <i className="fa fa-space-shuttle" aria-hidden="true"></i>
                  <span> Starships</span>
                </DropdownItem>
              )}
              {this.props.filterPeople? (
                <DropdownItem onClick={() => this.props.filterPeople(this.props.people, 'people')}>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <span> People</span>
                </DropdownItem>
              ):(
                <DropdownItem disabled>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <span> People</span>
                </DropdownItem>
              )}
              {this.props.filterPilots ? (
                <DropdownItem onClick={() => this.props.filterPilots(this.props.people, 'pilot')}>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <span> Pilots</span>
                </DropdownItem>
              ):(
                <DropdownItem disabled>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <span> Pilots</span>
                </DropdownItem>
              )}
              {this.props.filterVehicles ? (
                <DropdownItem onClick={() => this.props.filterVehicles(this.props.vehicles, 'vehicles')}>
                  <i className="fa fa-fighter-jet" aria-hidden="true"></i>
                  <span> Vehicles</span>
                </DropdownItem>
              ):(
                <DropdownItem disabled>
                  <i className="fa fa-fighter-jet" aria-hidden="true"></i>
                  <span> Vehicles</span>
                </DropdownItem>
              )}
              <DropdownItem onClick={() => this.props.stateReset('all')}>
                <i className="fa fa-refresh" aria-hidden="true"></i>
                <span> Reset</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledNavDropdown>
        </Nav>
      </div>

    )
  }
}

export default FilterBar;

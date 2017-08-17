/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import ImageSearch from '../components/Imagesearch';
import {Link} from 'react-router-dom';
import {Nav, UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';


import PlanetsModule from '../components/Planets-module';
import VehiclesModule from '../components/Vehicles-module';
import SpeciesModule from '../components/Species-module';
import StarshipsModule from '../components/Starships-module';
import FilterBar from '../components/Filter-bar';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class PeopleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: 'https://swapi.co/api/people/',
      collapse: false
    }
    this.toggle = this.toggle.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.handleNav = this.handleNav.bind(this);
  }

  componentDidMount() {
    this.props.fetchPeople(this.state.nav)
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleDetails() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleNav = (e) => {
    e.preventDefault();
    this.props.fetchPeople(e.target.value)
  };

  render() {

    //SET DATA<<<<<<<<<<<<<<<<<<<<<
    let data = this.props.people;

    //RENDER VARIABLES<<<<<<<<<<<<<<<
    let Data = data.map((people) => {
      let peopleUrl = people.url;
      let peopleEndpoint = peopleUrl.substr(peopleUrl.indexOf("/api/people") + 5);
      let homeworldUrl = people.homeworld;
      let homeworldEndpoint = homeworldUrl.substr(homeworldUrl.indexOf("/api/planets") + 5);
      let collapseTarget = peopleUrl.slice(-2, -1);

      //HOMEWORLDS<<<<<<<<<<<<<<<<

      let homeworld = <PlanetsModule homeworld ={people.homeworld}/>

      //SPECIES<<<<<<<<<<<<<<<<<<<<<<

      let species = people.species.map((species) => {
        let speciesEndpoint = species.substr(species.indexOf("/api/") + 5);
        let index = species.split('/').slice(-2)[0]
        let key = Math.random()
        return <SpeciesModule key={key} speciesEndpoint={speciesEndpoint} index={index}/>
      })

      //VEHICLES<<<<<<<<<<<<<<<<<<<<<<

      let vehicles = people.vehicles.map((vehicles) => {
        let vehiclesEndpoint = vehicles.substr(vehicles.indexOf("/api/") + 5);
        let index = vehicles.split('/').slice(-2)[0];
        let key = Math.random();
        return <VehiclesModule key={key} vehiclesEndpoint ={vehiclesEndpoint} index={index}/>
      })

      //STARSHIPS<<<<<<<<<<<<<<<<<<<<

      let starshipsList = people.starships.map((starships) => {
        let starshipsEndpoint = starships.substr(starships.indexOf("/api/") + 5);
        let index = starships.split('/').slice(-2)[0];
        let key = Math.random();
        return <StarshipsModule key={key} starshipsEndpoint={starshipsEndpoint} index={index} starships={starships}/>
      })

      //FILMS<<<<<<<<<<<<<<<<<<<<<<
      let filmList = people.films.map((films) => {
        //let filmsEndpoint = films.substr(films.indexOf("/api/") + 5);
        let filmsEndpoint = films.slice(-2, -1)
        let index = films.split('/').slice(-2)[0];
        let title;
        switch (filmsEndpoint) {
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

        return <DropdownItem key={films} tag={Link} to={`/film-endpoint/${ "films"}/${filmsEndpoint}/${title}`}>
          <span onClick={() => this.props.fetchDetails(films)}>{index}</span>
        </DropdownItem >
      })

      return (
        <div key={people.name} className="col-lg-5 col-md-5 col-sm-12 col-xs-12 main-card">
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>
            FILTER NAV
            <<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}
          <div className="card-header">
            <FilterBar homeworld={people.homeworld} films={people.films} starships={people.starships} species={people.species} vehicles={people.vehicles} filterWorld={this.props.filter} filterFilms={this.props.filterFilms} filterStarships={this.props.filterStarships} filterVehicles={this.props.filterVehicles} filterSpecies={this.props.filterSpecies} stateReset={this.props.stateReset}/>
          </div>


          <div className="profile col-fluid">
            <div className="card card-inverse">
              <ImageSearch className="card-img" name={people.name}/>
              <div className="card-img-overlay">
                <h3 className="card-title">{people.name}</h3>
              </div>
            </div>
          </div>

          <div className="profile-container col">
            <div className="profile-header">
              <div className="row">
                <div className="col card-header">
                  <h3>
                    Profile
                    <a href="">
                      <i className="pull-right fa fa-info-circle" data-toggle="collapse" data-target={"#" + collapseTarget} aria-expanded="false" aria-hidden="false" aria-controls="collapseExample"></i>
                    </a>
                  </h3>
                </div>
              </div>

              <div className="profile-details">
                <dl className="dl-horizontal">
                  <dt className="dt">
                    API Endpoint
                  </dt>
                  <dd className="dd">
                    {peopleEndpoint}
                  </dd>
                  <dt className="dt">Homeworld Endpoint</dt>
                  <dd className="dd">
                    {homeworldEndpoint}
                  </dd>
                </dl>
              </div>

              <div className="collapse" id={collapseTarget}>
                <dl className="dl-horizontal">
                  <dt className="dt">
                    Birth Year
                  </dt>
                  <dd className="dd">
                    {people.birth_year}
                  </dd>
                  <dt className="dt">Gender</dt>
                  <dd className="dd">
                    {people.gender}
                  </dd>
                  <dt className="dt">Height</dt>
                  <dd className="dd">
                    {people.height}
                  </dd>
                  <dt className="dt">Mass</dt>
                  <dd className="dd">
                    {people.mass}
                  </dd>
                  <dt className="dt">Eye Color</dt>
                  <dd className="dd">
                    {people.eye_color}
                  </dd>
                  <dt className="dt">Hair Color</dt>
                  <dd className="dd">
                    {people.hair_color}
                  </dd>
                  <dt className="dt">Skin Color</dt>
                  <dd className="dd">
                    {people.skin_color}
                  </dd>
                </dl>
              </div>

            </div>
          </div>

        </div>
      )
    })
    return (
      <div className="row justify-content-center no-gutters">
        {Data}
      </div>
    )
  }
}

export default PeopleList;

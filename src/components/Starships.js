import React, {Component} from 'react';
import ImageSearch from '../components/Imagesearch';
import {Link} from 'react-router-dom';
import {Nav, UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class StarshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'https://swapi.co/api/starships/'
    }
  }

  componentDidMount() {
    this.props.fetchStarships(this.state.nav)
  }

  render() {
    let filterFilms = this.props.filterFilms;
    let filterPilots = this.props.filterPilots;
    let reset = this.props.stateReset;

    let data = this.props.starships;
    let List = data.map((starships) => {
      let url = starships.url;
      let collapseTarget = starships.name.split(" ").slice(-1);
      let api = url.substr(url.indexOf("/api/") + 5);
      //let count = data.indexOf(starships) + 1;
      let filmList = starships.films.map((films) => {
        let filmsEndpoint = films.slice(-2, -1);
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
        </DropdownItem>
      })
      let pilotList = starships.pilots.map((pilot) => {
        let pilotApi = pilot.substring(pilot.indexOf("/api/") + 5);
        let index = pilot.split('/').slice(-2)[0];
        return <DropdownItem key={pilot} tag={Link} to={`/details/${ "endpoint"}/${pilotApi}`}>
          <span onClick={() => this.props.fetchDetails(pilot)}>{index}</span>
        </DropdownItem>
      })

      return (
        <div key={starships.name} className="col-sm-5 col-xs-12 main-card">
          <div className="row card-header">
            <Nav tabs>
              <UncontrolledNavDropdown>
                <DropdownToggle nav caret>
                  <i className="fa fa-film" aria-hidden="true"></i>
                </DropdownToggle>
                <DropdownMenu>
                  {filmList}
                </DropdownMenu>
              </UncontrolledNavDropdown>
              <UncontrolledNavDropdown>
                <DropdownToggle nav caret>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </DropdownToggle>
                <DropdownMenu>
                  {pilotList}
                </DropdownMenu>
              </UncontrolledNavDropdown>
              <UncontrolledNavDropdown>
                <DropdownToggle nav caret>
                  <i className="fa fa-filter" aria-hidden="true"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => filterFilms(filmList, 'film')}>
                    <i className="fa fa-film" aria-hidden="true"></i>
                  </DropdownItem>
                  <DropdownItem onClick={() => filterPilots(pilotList, 'pilot')}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </DropdownItem>
                  <DropdownItem onClick={() => reset('all')}>
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledNavDropdown>
            </Nav>
          </div>

          <div className="profile col-12">
            <div className="card card-inverse">
              <ImageSearch className="card-img" name={starships.name}/>
              <div className="card-img-overlay">
                <h3 className="card-title">{starships.name}</h3>
              </div>
            </div>
          </div>

          <div className="profile-container col-12">
            <div className="profile-header col-12">
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
                    {api}
                  </dd>
                  <dt className="dt">Class</dt>
                  <dd className="dd">
                    {starships.starship_class}
                  </dd>
                  <dt className="dt">
                    Model
                  </dt>
                  <dd className="dd">
                    {starships.model}
                  </dd>
                </dl>
              </div>

              <div className="collapse" id={collapseTarget}>
                <dl className="dl-horizontal">
                  <dt className="dt">Manufacturer</dt>
                  <dd className="dd">
                    {starships.manufacturer}
                  </dd>
                  <dt className="dt">Cost</dt>
                  <dd className="dd">
                    {starships.const_in_credits}
                  </dd>
                  <dt className="dt">Length</dt>
                  <dd className="dd">
                    {starships.length}
                  </dd>
                  <dt className="dt">Max Speed</dt>
                  <dd className="dd">
                    {starships.max_atmosphering_speed}
                  </dd>
                  <dt className="dt">Crew</dt>
                  <dd className="dd">
                    {starships.crew}
                  </dd>
                  <dt className="dt">Passengers</dt>
                  <dd className="dd">
                    {starships.passengers}
                  </dd>
                  <dt className="dt">Cargo Capacity</dt>
                  <dd className="dd">
                    {starships.cargo_capacity}
                  </dd>
                  <dt className="dt">Consumables</dt>
                  <dd className="dd">
                    {starships.consumables}
                  </dd>
                  <dt className="dt">Hyperdrive</dt>
                  <dd className="dd">
                    {starships.hyperdrive_rating}
                  </dd>
                  <dt className="dt">MGLT</dt>
                  <dd className="dd">
                    {starships.MGLT}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

        </div>
      )
    })
    return (
      <div className="row justify-content-center">
        {List}
      </div>
    )
  }
}

export default StarshipsList;

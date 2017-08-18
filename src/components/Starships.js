import React, {Component} from 'react';
import ImageSearch from '../components/Imagesearch';
import {Link} from 'react-router-dom';
import {Nav, UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import FilterBar from '../components/Filter-bar';

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


      return (
        <div key={starships.name} className="col-lg-5 col-md-5 col-sm-12 col-xs-12 main-card">
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>
            FILTER NAV
            <<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}

          <div className="card-header">
            <FilterBar films={starships.films} filterFilms={this.props.filterFilms} people={starships.pilots} stateReset={this.props.stateReset} filterPilots={this.props.filterPilots}/>
          </div>


          <div className="">

            <div className="profile col-fluid">
              <div className="card card-inverse">
                <ImageSearch className="card-img" name={starships.name} getImage={false}/>
                <div className="card-img-overlay">
                  <h3 className="card-title">{starships.name}</h3>
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
                        <i className="pull-right fa fa-angle-double-down" data-toggle="collapse" data-target={"#" + collapseTarget} aria-expanded="false" aria-hidden="false" aria-controls="collapseExample"></i>
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
        </div>
      )
    })
    return (
      <div className="row justify-content-center no-gutters">
        {List}
      </div>
    )
  }
}

export default StarshipsList;

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import ImageSearch from '../components/Imagesearch';
import FilterBar from '../components/Filter-bar';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
class FilmsList extends Component {

  render() {

    let data = this.props.films;
    let filmList = data.map((films) => {
      let people = films.characters;
      let planets = films.planets;
      let species = films.species;
      let starships = films.starships;
      let vehicles = films.vehicles;
      let title = films.title;
      let collapseTarget = title.split(' ').slice(-1)[0];


      return (
        <div key={films.episode_id} className="col-lg-5 col-md-5 col-sm-12 col-xs-12 main-card">
          <div className="card-header">
            <FilterBar people={people} planets={planets} species={species} starships={starships} vehicles={vehicles} filterWorld={this.props.filter} filterStarships={this.props.filterStarships} filterVehicles={this.props.filterVehicles} filterSpecies={this.props.filterSpecies} stateReset={this.props.stateReset}/>
          </div>

          <div className="">

            <div className="profile col-fluid">
              <div className="card card-inverse">
                <ImageSearch className="card-img" name={films.title}/>
                <div className="card-img-overlay">
                  <h3 className="card-title">{films.title}</h3>
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

                <div className="profile-detail">
                  <dl className="dl-horizontal">
                    <dt className="dt">
                      Director
                    </dt>
                    <dd className="dd">
                      {films.director}
                    </dd>
                    <dt className="dt">Episode</dt>
                    <dd className="dd">
                      {films.episode_id}
                    </dd>
                  </dl>
                </div>
                <div className="collapse" id={collapseTarget}>
                  <dl className="dl-horizontal">
                    <dt className="dt">Producer</dt>
                    <dd className="dd">
                      {films.producer}
                    </dd>
                    <dt className="dt">Release Datae</dt>
                    <dd className="dd">
                      {films.release_date}
                    </dd>
                  </dl>
                  <div className="card">
                    <div className="card-header">
                      Opening Crawl
                    </div>
                    <div className="card-body">
                      {films.opening_crawl}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    })
    return (
      <div className="row justify-content-center no-gutters">
        {filmList}
      </div>
    )
  }
}

export default FilmsList;

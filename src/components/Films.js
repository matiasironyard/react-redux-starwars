/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ImageSearch from '../components/Imagesearch';
import {Nav, UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
class FilmsList extends Component {

  render() {

    let data = this.props.films;
    let filmList = data.map((films) => {
      let title = films.title;
      let collapseTarget = title.split(' ').slice(-1)[0];
      let peopleList = films.characters.map((people) => {
        let peopleApi = people.substr(people.indexOf("/api/") + 5);
        let index = people.split('/').slice(-2)[0]
        return <DropdownItem key={people} tag={Link} to={`/details/${ "endpoint"}/${peopleApi}`}>
          <span onClick={() => this.props.fetchDetails(people)}>{index}</span>
        </DropdownItem>
      })

      let starshipsList = films.starships.map((starships) => {
        let starshipsEndpoint = starships.substr(starships.indexOf("/api/") + 5);
        let index = starships.split('/').slice(-2)[0];
        return <DropdownItem key={starships} tag={Link} to={`/details/${ "endpoint"}/${starshipsEndpoint}`}>
          <span onClick={() => this.props.fetchDetails(starships)}>{index}</span>
        </DropdownItem>
      })

      return (
        <div key={films.episode_id} className="col-lg-5 col-md-5 col-sm-12 col-xs-12 main-card">
          <div className="card-header">
            <Nav tabs>
              <UncontrolledNavDropdown>
                <DropdownToggle nav caret>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </DropdownToggle>
                <DropdownMenu>
                  {peopleList}
                </DropdownMenu>
              </UncontrolledNavDropdown>

              <UncontrolledNavDropdown>
                <DropdownToggle nav caret>
                  <i className="fa fa-space-shuttle" aria-hidden="true"></i>
                </DropdownToggle>
                <DropdownMenu>
                  {starshipsList}
                </DropdownMenu>
              </UncontrolledNavDropdown>
            </Nav>
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
                        <i className="pull-right fa fa-info-circle" data-toggle="collapse" data-target={"#" + collapseTarget} aria-expanded="false" aria-hidden="false" aria-controls="collapseExample"></i>
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
                    <dt className="dt">Producer</dt>
                    <dd className="dd">
                      {films.producer}
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

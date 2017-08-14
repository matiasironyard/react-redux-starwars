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
    console.log('this', this.props)
    let headerStyle = {
      "textAlign": "center",
      "height": "45vw",
      "color": "#fff",
      "backgroundImage": "url(https://solarsystem.nasa.gov/kids/images/layers/png/background.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px"
    }

    let data = this.props.films;
    let filmList = data.map((films) => {
      let counter = data.indexOf(films) + 1;
      let filmUrl = films.url;
      let title = films.title;
      let collapseTarget = title.split(' ').slice(-1)[0];
      let apiEndpoint = filmUrl.substr(filmUrl.indexOf("/api/") + 5);
      //let endpointId = filmUrl.substr(filmUrl.lastIndexOf('s/*') - 1, 1);

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
        <div key={films.episode_id} className="col-sm-5 main-card">

          <div className="row card-header">
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

          <div className="row card-block">
            <div className="profile col-12">
              <div className="card card-inverse">
                <ImageSearch className="card-img" title={films.title}/>
                <div className="card-img-overlay">
                  <h3 className="card-title">{films.title}</h3>
                </div>
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
            <div className="films-explorer row">
              <div className="header col" style={headerStyle}>
                <div className="fade"></div>
                <section className="star-wars">
                  <div className="crawl">
                    <div className="title">
                      <p>{films.title}</p>
                    </div>
                    <p>{films.opening_crawl}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/*<div className="col-lg-6  col-md-6">
            <div className="profile">
              <p className="pull-right">
                <i className="fa fa-film" aria-hidden="true"/> {counter}
              </p>
              <h3 className="headings">
                {films.title}
              </h3>
              <h4 className="badge">
                API Endpoint: {apiEndpoint}
              </h4>
              <hr/>
              <h4 className="sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt className="dt">Director</dt>
                <dd className="dd">
                  {films.director}
                </dd>
                <dt className="dt">Episode</dt>
                <dd className="dd">
                  {films.episode_id}
                </dd>
                <dt>Details</dt>
                <dd>
                  <Link to={`/film-endpoint/${apiEndpoint}${films.title}`}>
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                  </Link>
                </dd>
              </dl>
            </div>
          </div>*/}
        </div>
      )
    })
    return (
      <div className="row justify-content-center">
        {filmList}
      </div>
    )
  }
}

export default FilmsList;

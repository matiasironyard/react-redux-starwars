/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
class FilmsList extends Component {

  render() {
    let data = this.props.films;
    let filmList = data.map((films) => {
      let counter = data.indexOf(films) + 1;
      let filmUrl = films.url;
      let apiEndpoint = filmUrl.substr(filmUrl.indexOf("/api/") + 5);
      //let endpointId = filmUrl.substr(filmUrl.lastIndexOf('s/*') - 1, 1);

      let peopleList = films.characters.map((people) => {
        let peopleApi = people.substr(people.indexOf("/api/") + 5);
        return <li className="list-group-item" key={people}>
          <Link to={`/details/${ "endpoint"}/${peopleApi}`}>
            <span onClick={() => this.props.fetchDetails(people)}>{peopleApi}</span>
          </Link>
        </li>
      })

      let starshipsList = films.starships.map((starships) => {
        let starshipsEndpoint = starships.substr(starships.indexOf("/api/") + 5);
        return <li className="list-group-item" key={starships}>
          <Link to={`/details/${ "endpoint"}/${starshipsEndpoint}`}>
            <span onClick={() => this.props.fetchDetails(starships)}>{starshipsEndpoint}</span>
          </Link>
        </li>
      })

      return (
        <div key={films.episode_id} className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11 card">
          <div className="col-lg-6  col-md-6">
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
          </div>

          <div className="col-lg-3 col-md-3">
            <h4 className="sub-headings">
              People Endpoints
            </h4>
            <hr/>
            <ul className="list-group scroll">
              {peopleList}
            </ul>
          </div>

          <div className="col-lg-3 col-md-3">
            <h4 className="sub-headings">
              Starships Endpoints
            </h4>
            <hr/>
            <ul className="list-group scroll">
              {starshipsList}
            </ul>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h1 className="headings">Films</h1>
        <hr/> {filmList}
      </div>
    )
  }
}

export default FilmsList;

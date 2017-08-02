import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FilmsList extends Component {

  render() {
    let data = this.props.films.slice().sort();
    let List = data.map((films) => {
      let count = data.indexOf(films) + 1;
      let url = films.url;
      let api = url.substr(url.indexOf("/api/") + 5);
      //let endpoint = url.substr(url.lastIndexOf('s/*') - 1, 1);
      let people = films.characters.map((people) => {
        let peopleApi = people.substr(people.indexOf("/api/") + 5);
        return <li className="list-group-item" key={people}>
          <Link  to={`/details/${ "endpoint"}/${peopleApi}`}>
              <span onClick={() => this.props.fetchDetails(people)}>{peopleApi}</span>
          </Link>
        </li>
      })
      let starships = films.starships.map((starships) => {
        let endpoint = starships.substr(starships.indexOf("/api/") + 5);
        return <li className="list-group-item" key={starships}>
          <Link  to={`/details/${ "endpoint"}/${endpoint}`}>
              <span onClick={() => this.props.fetchDetails(starships)}>{endpoint}</span>
          </Link>
        </li>
      })

      return (
        <div
          key={films.episode_id}
          className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11 card">
          <div className="col-lg-6">
            <div className="profile">
              <i className="fa fa-film" aria-hidden="true">
              </i>
              <span>
                {count}
              </span>
              <h3 className="headings">
                {films.title}
              </h3>
              <h4 className="badge">
                API Endpoint: {api}
              </h4>
              <hr/>
              <h4 className="sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt>Director</dt>
                <dd>
                  {films.director}
                </dd>
                <dt>Episode</dt>
                <dd>
                  {films.episode_id}
                </dd>
              </dl>
            </div>
            <hr/>
            <Link  to={`/details/${ "endpoint"}/${api}`}>
                <button className="btn btn-primary" onClick={() => this.props.fetchDetails(url)}>Details</button>
            </Link>
          </div>
          <div className="col-lg-3">
            <h4 className="sub-headings">
              People Endpoints
            </h4>
            <hr/>
            <ul className="list-group">
              {people}
            </ul>
          </div>
          <div className="col-lg-3">
            <h4 className="sub-headings">
              Starships Endpoints
            </h4>
            <hr/>
            <ul className="list-group">
              {starships}
            </ul>
          </div>
        </div>
      )
    })
    return (
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
          <h1 className="headings">Films</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

export default FilmsList;

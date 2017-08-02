import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StarshipsList extends Component {

  render() {
    let data = this.props.starships.slice().sort();
    let List = data.map((starships) => {
      let url = starships.url;
      let api = url.substr(url.indexOf("/api/") + 5);
      let count = data.indexOf(starships) + 1;
      let starshipList = starships.films.map((films) => {
        let filmApi = films.substr(films.indexOf("/api/") + 5);
        return <li className="list-group-item" key={films}>
          <Link  to={`/details/${ "endpoint"}/${filmApi}`}>
              <span onClick={() => this.props.fetchDetails(films)}>{filmApi}</span>
          </Link>
        </li>
      })
      return (
        <div key={starships.name} className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11 card">
          <div className="col-lg-6">
            <div className="profile">
              <i className="fa fa-space-shuttle" aria-hidden="true"></i>
              <span>
                {count}</span>
              <h3 className="headings">
                {starships.name}
              </h3>
              <h4 className="badge">
                API Endpoint: {api}
              </h4>
              <hr/>
              <h4 className="sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt>Model</dt>
                <dd>
                  {starships.model}
                </dd>
                <dt>Class</dt>
                <dd>
                  {starships.starship_class}
                </dd>
              </dl>
            </div>
            <hr/>
            <Link  to={`/details/${ "endpoint"}/${api}`}>
                <button className="btn btn-primary" onClick={() => this.props.fetchDetails(url)}>Details</button>
            </Link>
          </div>
          <div className="col-lg-6">
            <h4 className="sub-headings">
              Film Endpoints
            </h4>
            <hr/>
            <ul className="list-group">
              {starshipList}
            </ul>
          </div>
        </div>
      )
    })
    return (
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
          <h1 className="headings">Starships</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

export default StarshipsList;

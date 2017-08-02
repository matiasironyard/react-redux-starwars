import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PeopleList extends Component {

  render() {
    console.log('REACT VIEW: received state (data and action) from reducer via props. See index.js in "reducers"', this.props)
    let filter = this.props.filter;
    let filterFilms = this.props.filterFilms;
    let filterStarships = this.props.filterStarships;
    let toggle = this.props.fetchPeople;
    let data = this.props.people.slice().sort();
    let List = data.map((people) => {
      let count = data.indexOf(people) + 1;
      let url = people.url;
      let endpoint = url.substr(url.indexOf("/api/") + 5);
      let filmList = people.films.map((films) => {
        let endpoint = films.substr(films.indexOf("/api/") + 5);
        return <li className="list-group-item" key={films}>
          <Link to={`/details/${ "endpoint"}/${endpoint}`}>
            <span onClick={() => this.props.fetchDetails(films)}>{endpoint}</span>
          </Link>
        </li>
      })
      let starships = people.starships.map((starships) => {
        let endpoint = starships.substr(starships.indexOf("/api/") + 5);
        return <li className="list-group-item" key={starships}>
          <Link to={`/details/${ "endpoint"}/${endpoint}`}>
            <span onClick={() => this.props.fetchDetails(starships)}>
              {endpoint}
            </span>
          </Link>
        </li>
      })
      let imgUrl;
      if (!people.img) {
        imgUrl = "url(../images/icon.png)"
      } else {
        imgUrl = "url(" + people.img + ")"
      }
      let style = {
        backgroundImage: imgUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "200px",
        width: "200px"
      }
      return (
        <div key={people.name} className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11 col-md-10 col-md-offset-1 col-xs-11 card">
          <h2 className="media-heading">
            {people.name}
          </h2>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <span className="navbar-brand">Filter by shared:
                </span>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <a onClick={() => filter(people.homeworld, data)}>Worlds</a>
                </li>
                <li>
                  <a onClick={() => filterFilms(filmList, data)}>Films</a>
                </li>
                <li>
                  <a onClick={() => filterStarships(starships, data)}>Starships</a>
                </li>
                <li>
                  <a className="active" onClick={() => toggle('https://swapi.co/api/people')}>
                    View All
                  </a>
                </li>
              </ul>
              <span className="navbar-brand pull-right">
                {count}
                / {this.props.people.length}
              </span>
              <i className="fa fa-user-circle-o navbar-brand pull-right" aria-hidden="true"></i>
            </div>
          </nav>
          <div className="col-lg-6">
            <div className="profile">
              <div className="img-circle profile-pic" style={style} src={people.img} alt=""></div>
              <h4 className="sub-headings col-lg-12">Profile</h4>
              <hr/>
              <dl className="dl-horizontal">
                <dt>Homeworld</dt>
                <dd>
                  {people.homeworld}
                </dd>
                <dt>
                  API
                </dt>
                <dd>
                  {endpoint}
                </dd>
                <dt>Details</dt>
                <dd>
                  <Link  to={`/details/${ "endpoint"}/${endpoint}`}>
                      <button className="btn btn-primary" onClick={() => this.props.fetchDetails(url)}>Details</button>
                  </Link>
                </dd>
              </dl>
            </div>
          </div>
          <div className="col-lg-3">
            <h4 className="sub-headings">
              Film Endpoints
            </h4>
            <hr/>
            <ul className="list-group">
              {filmList}
            </ul>
          </div>
          <div className="col-lg-3">
            <h4 className="sub-headings">
              Starship Endpoints
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
        <div className="col-lg-12">
          <h1 className="heading">People</h1>
        </div>
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11 col-md-12"></div>
        {List}
      </div>
    )
  }
}

export default PeopleList;

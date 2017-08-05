/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class PeopleList extends Component {

  render() {
    //FILTERS<<<<<<<<<<<<<<<<<<<<<<<<
    console.log('>>>', this.props)
    let filter = this.props.filter;
    let filterFilms = this.props.filterFilms;
    let filterStarships = this.props.filterStarships;
    let reset = this.props.stateReset;

    //SORT DATA<<<<<<<<<<<<<<<<<<<<<
    let data = this.props.people;

    //RENDER VARIABLES<<<<<<<<<<<<<<<
    let List = data.map((people) => {
      let counter = data.indexOf(people) + 1;
      let length = data.length;
      let peopleUrl = people.url;
      let peopleEndpoint = peopleUrl.substr(peopleUrl.indexOf("/api/") + 5);
      let homeworldUrl = people.homeworld;
      let homeworldEndpoint = homeworldUrl.substr(homeworldUrl.indexOf("/api/") + 5);

      let starshipsList = people.starships.map((starships) => {
        let starshipsEndpoint = starships.substr(starships.indexOf("/api/") + 5);
        return <li className="list-group-item" key={starships}>
          <Link to={`/details/${ "endpoint"}/${starshipsEndpoint}`}>
            <span onClick={() => this.props.fetchDetails(starships)}>{starshipsEndpoint}</span>
          </Link>
        </li>
      })

      let filmList = people.films.map((films) => {
        let filmsEndpoint = films.substr(films.indexOf("/api/") + 5);
        return <li className="list-group-item" key={films}>
          <Link to={`/details/${ "endpoint"}/${filmsEndpoint}`}>
            <span onClick={() => this.props.fetchDetails(films)}>{filmsEndpoint}</span>
          </Link>
        </li>
      })

      // Image conditional rendering
      let imgUrl;
      if (!people.img) {
        imgUrl = "url(../images/icon2.png)"
      } else {
        imgUrl = "url(" + people.img + ")"
      }
      // Style
      let style = {
        backgroundImage: imgUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "200px",
        width: "200px"
      }

      return (
        <div key={people.name} className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 card">
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>
            FILTER NAV
            <<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}
          <Nav bsStyle="pills" style={{
            "backgroundColor": "black",
            "marginLeft": -15,
            "marginRight": -15
          }}>
            <NavItem>
              Sort by:
            </NavItem>
            <NavItem onClick={() => filter(people.homeworld, 'homeworld') + this.props.toggleColor('white')}>
              <i className="fa fa-globe" aria-hidden="true"></i>
            </NavItem>
            <NavItem onClick={() => filterFilms(filmList, 'film')}>
              <i className="fa fa-film" aria-hidden="true"></i>
            </NavItem>
            <NavItem onClick={() => filterStarships(starshipsList, 'starship')}>
              <i className="fa fa-space-shuttle" aria-hidden="true"></i>
            </NavItem>
            <NavItem onClick={() => reset('all')}>
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </NavItem>
            <NavItem className="pull-right">
              <span>Viewing: {counter}
                / {length}</span>
            </NavItem>

          </Nav>

          <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
            <h2 className="headings">
              {people.name}
            </h2>
            <div className="profile">
              <div className="img-circle profile-pic" style={style} src={people.img} alt=""></div>
              <h4 className="sub-headings col-lg-12">Profile</h4>
              <hr/>
              <dl className="dl-horizontal">
                <dt className="dt">
                  API Enpoint
                </dt>
                <dd className="dd">
                  {peopleEndpoint}
                </dd>
                <dt className="dt">Homeworld</dt>
                <dd className="dd">
                  {homeworldEndpoint}
                </dd>
                <dt className="dt">Details</dt>
                <dd className="dd">
                  <Link to={`/details/${ "endpoint"}/${peopleEndpoint}${people.name}`}>
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                  </Link>
                </dd>
              </dl>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 scroll">
            <h4 className="sub-headings">
              Film Endpoints
            </h4>
            <hr/>
            <ul className="list-group">
              {filmList}
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 scroll">
            <h4 className="sub-headings">
              Starship Endpoints
            </h4>
            <hr/>
            <ul className="list-group">
              {starshipsList}
            </ul>
          </div>
        </div>
      )
    })
    return (
      <div className="row">
        <div className="col-lg-12">
          <h1 className="headings">People</h1>
        </div>
        <div className="row">
          {List}
        </div>
      </div>
    )
  }
}

export default PeopleList;

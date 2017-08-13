/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import ImageSearch from '../components/Imagesearch';
import {Link} from 'react-router-dom';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown,
  Button,
  Collapse,
  Card,
  CardBlock
} from 'reactstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class PeopleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: 'https://swapi.co/api/people/',
      collapse: false
    }
    this.toggle = this.toggle.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.handleNav = this.handleNav.bind(this);
  }

  componentDidMount() {
    this.props.fetchPeople(this.state.nav)
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggleDetails() {

    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleNav = (e) => {
    e.preventDefault();
    this.props.fetchPeople(e.target.value)
  };

  render() {
    //FILTERS<<<<<<<<<<<<<<<<<<<<<<<<
    let filter = this.props.filter;
    let filterFilms = this.props.filterFilms;
    let filterStarships = this.props.filterStarships;
    let reset = this.props.stateReset;

    //SORT DATA<<<<<<<<<<<<<<<<<<<<<
    let data = this.props.people;

    //RENDER VARIABLES<<<<<<<<<<<<<<<
    let List = data.map((people) => {
      let peopleUrl = people.url;
      let peopleEndpoint = peopleUrl.substr(peopleUrl.indexOf("/api/people") + 5);
      let homeworldUrl = people.homeworld;
      let homeworldEndpoint = homeworldUrl.substr(homeworldUrl.indexOf("/api/planets") + 5);
      let collapseTarget = peopleUrl.slice(-2, -1);

      //STARSHIPS<<<<<<<<<<<<<<<<<<<<
      let starshipsList = people.starships.map((starships) => {
        //let starshipsEndpoint = starships.substr(starships.indexOf("/api/") + 5);
        let starshipsEndpoint = starships.slice(-13, -1);
        let index = starships.slice(-3, -1);
        return <PaginationItem key={starships}>
          <PaginationLink tag={Link} to={`/details/${ "endpoint"}/${starshipsEndpoint}`}>
            <span onClick={() => this.props.fetchDetails(starships)}>{index}</span>
          </PaginationLink>
        </PaginationItem>
      })

      //FILMS<<<<<<<<<<<<<<<<<<<<<<
      let filmList = people.films.map((films) => {
        //let filmsEndpoint = films.substr(films.indexOf("/api/") + 5);
        let filmsEndpoint = films.slice(-2, -1)
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

        return <PaginationItem key={films}>
          <PaginationLink tag={Link} to={`/film-endpoint/${ "films"}/${filmsEndpoint}/${title}`}>
            <span onClick={() => this.props.fetchDetails(films)}>{filmsEndpoint}</span>
          </PaginationLink>
        </PaginationItem>
      })

      return (
        <div key={people.name} className="col card main-card">
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>
            FILTER NAV
            <<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}
          <div className="row card-header">
            <div className="col-12">
              <UncontrolledButtonDropdown className="pull-right">
                <DropdownToggle caret>
                  <i className="fa fa-filter" aria-hidden="true"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => filter(people.homeworld, 'homeworld')}>
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </DropdownItem>
                  <DropdownItem onClick={() => filterFilms(filmList, 'film')}>
                    <i className="fa fa-film" aria-hidden="true"></i>
                  </DropdownItem>
                  <DropdownItem onClick={() => filterStarships(starshipsList, 'starship')}>
                    <i className="fa fa-space-shuttle" aria-hidden="true"></i>
                  </DropdownItem>
                  <DropdownItem onClick={() => reset('all')}>
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </div>

          <div className="row card-block">
            <div className="profile-left col-3">
              <div className="card card-inverse">
                <ImageSearch className="card-img" name={people.name}/>
                <div className="card-img-overlay">
                  <h3 className="card-title">{people.name}</h3>
                </div>
              </div>
            </div>

            <div className="profile-right col-sm-8 card">
              <div className="profile">
                <div className="row">
                <div className="col-lg-12 card-header">
                  <h3>
                    Profile
                    <a href="">
                      <i className="pull-right fa fa-info-circle"  data-toggle="collapse" data-target={"#" + collapseTarget} aria-expanded="false" aria-hidden="false" aria-controls="collapseExample">
                      </i>
                    </a>
                  </h3>
                </div>
                </div>
                <dl className="dl-horizontal">
                  <dt className="dt">Starships Endpoints</dt>
                  <dd className="dd">
                    <Pagination className="endpoints">
                      {starshipsList}
                    </Pagination>
                  </dd>
                  <dt className="dt">Film Endpoints</dt>
                  <dd className="dd">
                    <Pagination className="endpoints">
                      {filmList}
                    </Pagination>
                  </dd>

                  <dt className="dt">
                    API Endpoint
                  </dt>
                  <dd className="dd">
                    {peopleEndpoint}
                  </dd>
                  <dt className="dt">Homeworld Endpoint</dt>
                  <dd className="dd">
                    {homeworldEndpoint}
                  </dd>
                  {/*
                <dt className="dt">Details</dt>
                <dd className="dd">
                  <Link to={`/details/${ "endpoint"}/${peopleEndpoint}${people.name}`}>
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                  </Link>
                </dd>
                */}
                </dl>
              </div>
              <div className="collapse profile-right col-sm-8" id={collapseTarget}>
                <dl className="dl-horizontal">
                  <dt className="dt">
                    Birth Year
                  </dt>
                  <dd className="dd">
                    {people.birth_year}
                  </dd>
                  <dt className="dt">Gender</dt>
                  <dd className="dd">
                    {people.gender}
                  </dd>
                  <dt className="dt">Height</dt>
                  <dd className="dd">
                    {people.height}
                  </dd>
                  <dt className="dt">Eye Color</dt>
                  <dd className="dd">
                    {people.eye_color}
                  </dd>
                  <dt className="dt">Hair Color</dt>
                  <dd className="dd">
                    {people.hair_color}
                  </dd>
                  <dt className="dt">Skin Color</dt>
                  <dd className="dd">
                    {people.skin_color}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="">
        {List}
      </div >
    )
  }
}

export default PeopleList;

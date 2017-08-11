/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import ImageSearch from '../components/Imagesearch';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Button} from 'react-bootstrap';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown
} from 'reactstrap';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class PeopleList extends Component {
  constructor(props) {
    super(props)
    this.handleNav = this.handleNav.bind(this);
    this.state = {
      nav: 'https://swapi.co/api/people/'
    }
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    let self = this;
    this.props.fetchPeople(this.state.nav)
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleNav = (e) => {
    e.preventDefault();
    console.log('what', e.target.value)
    this.props.fetchPeople(e.target.value)
  };

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
      let peopleEndpoint = peopleUrl.substr(peopleUrl.indexOf("/api/people") + 5);
      let homeworldUrl = people.homeworld;
      let homeworldEndpoint = homeworldUrl.substr(homeworldUrl.indexOf("/api/planets") + 5);

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
            console.log('default');
        }

        return <PaginationItem key={films}>
          <PaginationLink tag={Link} to={`/film-endpoint/${ "films"}/${filmsEndpoint}/${title}`}>
            <span onClick={() => this.props.fetchDetails(films)}>{filmsEndpoint}</span>
          </PaginationLink>
        </PaginationItem>
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
        <div key={people.name} className="col-10 offset-1 card">
          {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>
            FILTER NAV
            <<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}
          <div className="col-12 filter-col">
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

          <div className="row">
            <div className="profile-left col-sm-4">
              <h2 className="headings">
                {people.name}
              </h2>
              <ImageSearch name={people.name}/>
            </div>

            <div className="profile-right col-sm-8">
              <div className="profile">
                <h4 className="sub-headings col-lg-12">Profile</h4>
                <hr/>
                <dl className="dl-horizontal">
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
                  <dt className="dt">Starships</dt>
                  <dd className="dd">
                    <Pagination className="endpoints">
                      {starshipsList}
                    </Pagination>
                  </dd>
                  <dt className="dt">Films</dt>
                  <dd className="dd">
                    <Pagination className="endpoints">
                      {filmList}
                    </Pagination>
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
          </div>
        </div>
      )
    })
    return (
      <div className="">
        {List}
      </div>
    )
  }
}

export default PeopleList;

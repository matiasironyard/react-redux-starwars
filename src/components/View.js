import React, {Component} from 'react';

class View extends Component {
  render() {
    let endpoint = this.props.endpoint; 
    if (endpoint === 'films') {
      let film = this.props.details;
      return (
        <div className="col-lg-8 col-lg-offset-2 col-sm-12 card">
          <div className="profile">
            <img
              className="img-responsive col-lg-5 col-md-5 col-sm-5"
              src={film.img}
              alt=""/>
            <div className="col-lg-7 col-md-7 col-sm-7">
              <h3 className="headings">
                {film.title}
              </h3>
              <hr/>
              <h4 className="sub-headings">Details</h4>
              <dl className="dl-horizontal">
                <dt>Opening</dt>
                <dd>
                  {film.opening_crawl}
                </dd>
                <dt>Director</dt>
                <dd>
                  {film.director}
                </dd>
                <dt>Producer</dt>
                <dd>
                  {film.producer}
                </dd>
                <dt>Episode</dt>
                <dd>
                  {film.episode_id}
                </dd>
                <dt>Release</dt>
                <dd>
                  {film.release_date}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      )
    } else if (endpoint === 'people') {
      let character = this.props.details;
      let imgUrl;
      if (!character.img) {
        imgUrl = "url(../images/icon.png)"
      } else {
        imgUrl = "url(" + character.img + ")"
      }
      let style = {
        backgroundImage: imgUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "300px",
        width: "300px"
      }
      return (
        <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 card">
          <div className="profile">
            <div className="col-lg-6">
              <h3 className="headings">
                {character.name}
              </h3>
              <div
                className="img-rounded profile-pic"
                style={style}
                src={character.img}
                alt="">
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="sub-headings">Profile</h4>
              <hr/>
              <dl className="dl-horizontal">
                <dt>
                  Birth Year
                </dt>
                <dd>
                  {character.birth_year}
                </dd>
                <dt>Gender</dt>
                <dd>
                  {character.gender}
                </dd>
                <dt>Mass</dt>
                <dd>
                  {character.mass}
                </dd>
                <dt>Height</dt>
                <dd>
                  {character.height}
                </dd>
                <dt>
                  Eye Color
                </dt>
                <dd>
                  {character.eye_color}
                </dd>
                <dt>
                  Hair Color
                </dt>
                <dd>
                  {character.hair_color}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      )
    } else if (endpoint === 'starships') {
      let starship = this.props.details;
      return (
        <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 card">
          <div className="profile">
            <h3 className="headings">
              {starship.name}
            </h3>
            <hr/>
            <h4 className="sub-headings">Details</h4>
            <dl className="dl-horizontal">
              <dt>MGLT</dt>
              <dd>
                {starship.MGLT}
              </dd>
              <dt>Manufacturer</dt>
              <dd>
                {starship.manufacturer}
              </dd>
              <dt>Model</dt>
              <dd>
                {starship.model}
              </dd>
              <dt>Class</dt>
              <dd>
                {starship.starship_class}
              </dd>
              <dt>Cargo</dt>
              <dd>
                {starship.cargo_capacity}
              </dd>
              <dt>Length</dt>
              <dd>
                {starship.length}
              </dd>
            </dl>
          </div>
        </div>
      )
    } else {
      return (
        <div className="loader"></div>
      )
    }
  }
}

export default View;

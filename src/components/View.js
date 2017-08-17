import React, {Component} from 'react';

class View extends Component {

  componentWillMount() {
    this.props.fetchDetails('https://swapi.co/api/' + this.props.id + "/" + this.props.index)
    if (!this.props.title) {
      return
    } else {
      this.props.fetchReviews(this.props.title)
    }
  }

  render() {
    let id = this.props.id;
    if (id === 'films') {
      let film = this.props.details;
      let reviews,
        voteAvg,
        voteCount;
      if (this.props.reviews.length === 0) {
        reviews = 'no reviews.'
      } else if (this.props.reviews.reviews) {
        let overview = this.props.reviews.reviews.results[0].overview;
        let vote_avg = this.props.reviews.reviews.results[0].vote_average;
        let vote_count = this.props.reviews.reviews.results[0].vote_count;
        reviews = overview;
        voteAvg = vote_avg;
        voteCount = vote_count;
      }
      let imgUrl = '';
      if (this.props.reviews.length === 0) {
        imgUrl = ''
      } else if (this.props.reviews.reviews) {
        let posterLink = this.props.reviews.reviews.results[0].poster_path;
        imgUrl = "https://image.tmdb.org/t/p/w500" + posterLink;
      }

      return (
        <div className="row justify-content-center no-gutters">
          <div className="col-10 main-card">
            <img className="img-responsive col" src={imgUrl} alt=""/>

            <div className="col top-margin">
              <h3 className="headings">
                {film.title}
              </h3>
              <hr/>
              <h4 className="sub-headings">Details</h4>
              <dl className="dl-horizontal">
                <dt className="dt">Director</dt>
                <dd className="dd">
                  {film.director}
                </dd>
                <dt className="dt">Producer</dt>
                <dd className="dd">
                  {film.producer}
                </dd>
                <dt className="dt">Episode</dt>
                <dd className="dd">
                  {film.episode_id}
                </dd>
                <dt className="dt">Release</dt>
                <dd className="dd">
                  {film.release_date}
                </dd>
                <dt className="dt">Review</dt>
                <dd className="dd">
                  {reviews}
                </dd>
                <dt className="dt">Vote Average</dt>
                <dd className="dd">
                  {voteAvg}
                  / 10
                </dd>
                <dt className="dt">Vote Count</dt>
                <dd className="dd">
                  {voteCount}
                </dd>
              </dl>
            </div>
            <div className="card">
              <div className="card-header">
                Opening Crawl
              </div>
              <div className="card-body">
                <p>{film.opening_crawl}</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (id === 'people') {
      let character = this.props.details;
      return (
        <div className="row justify-content-center no-gutters">
          <div className="col-10 main-card">
            <div className="profile">
              <div className="col">
                <h3 className="headings">
                  {character.name}
                </h3>
                <div className="img-rounded profile-pic" alt=""></div>
              </div>
              <div className="col top-margin">
                <h4 className="sub-headings">Profile</h4>
                <hr/>
                <dl className="dl-horizontal">
                  <dt className="dt">
                    Birth Year
                  </dt>
                  <dd className="dd">
                    {character.birth_year}
                  </dd>
                  <dt className="dt">Gender</dt>
                  <dd className="dd">
                    {character.gender}
                  </dd>
                  <dt className="dt">Mass</dt>
                  <dd className="dd">
                    {character.mass}
                  </dd>
                  <dt className="dt">Height</dt>
                  <dd className="dd">
                    {character.height}
                  </dd>
                  <dt className="dt">
                    Eye Color
                  </dt>
                  <dd className="dd">
                    {character.eye_color}
                  </dd>
                  <dt className="dt">
                    Hair Color
                  </dt>
                  <dd className="dd">
                    {character.hair_color}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (id === 'starships') {
      let starship = this.props.details;
      return (
        <div className="row justify-content-center">
          <div className="col-10 main-card">
            <div className="profile">
              <h3 className="headings">
                {starship.name}
              </h3>
              <hr/>
              <h4 className="sub-headings">Details</h4>
              <dl className="dl-horizontal">
                <dt className="dt">Class</dt>
                <dd className="dd">
                  {starship.starship_class}
                </dd>
                <dt className="dt">
                  Model
                </dt>
                <dd className="dd">
                  {starship.model}
                </dd>
                <dt className="dt">Manufacturer</dt>
                <dd className="dd">
                  {starship.manufacturer}
                </dd>
                <dt className="dt">Cost</dt>
                <dd className="dd">
                  {starship.const_in_credits}
                </dd>
                <dt className="dt">Length</dt>
                <dd className="dd">
                  {starship.length}
                </dd>
                <dt className="dt">Max Speed</dt>
                <dd className="dd">
                  {starship.max_atmosphering_speed}
                </dd>
                <dt className="dt">Crew</dt>
                <dd className="dd">
                  {starship.crew}
                </dd>
                <dt className="dt">Passengers</dt>
                <dd className="dd">
                  {starship.passengers}
                </dd>
                <dt className="dt">Cargo Capacity</dt>
                <dd className="dd">
                  {starship.cargo_capacity}
                </dd>
                <dt className="dt">Consumables</dt>
                <dd className="dd">
                  {starship.consumables}
                </dd>
                <dt className="dt">Hyperdrive</dt>
                <dd className="dd">
                  {starship.hyperdrive_rating}
                </dd>
                <dt className="dt">MGLT</dt>
                <dd className="dd">
                  {starship.MGLT}
                </dd>
              </dl>
            </div>
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

import React from 'react';
// import { Link } from 'react-router-dom';
import MovieRatings from '../../containers/MovieRatings/MovieRatings'
import '../../containers/App/App.scss';

const MoviesCard = ({ average_rating, id, backdrop_path, overview, poster_path, release_date, title}) => {
  return (
    <section className="moviesContainer-movieCard-cardContainer">
      <h2 className="movieCard-cardContainer-title">{title}</h2>
      <img className="movieCard-cardContainer-poster" src={poster_path}alt="Official movie poster for film"></img>
      <h4>Average Movie Rating: {average_rating}</h4>
      <button className="btn">Add Rating</button>
      {/* <Link to={'/showpage/'}> */}
      <button className="btn">See More</button>
      {/* </Link> */}
      <MovieRatings />
    </section>
  )

}

export default MoviesCard;

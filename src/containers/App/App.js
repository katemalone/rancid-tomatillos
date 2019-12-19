import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../../containers/Header/Header'
import { getMovieData } from '../../util/apiCalls'
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { addMovies } from '../../actions/index';
import { Route } from 'react-router-dom'
// import ShowPage from '../../components/ShowPage/ShowPage';
// import MovieRatings from '../MovieRatings/MovieRatings';
import './App.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class App extends Component {

  componentDidMount() {
    return getMovieData('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(data => this.props.addMovies(data))
  }

  render() {
    return (
      <main className="app-main">
        <Header />
        <Route path='/login' render={() => <LoginForm />} />
        <Route path='/profile' render={() => <UserProfile />} />
        <Route exact path='/' render={() => <MoviesContainer />} />
        {/* <ShowPage /> */}
        {/* <MovieRatings /> */}
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: data => dispatch(addMovies(data))
})

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  movies: PropTypes.array
}

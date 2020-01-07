import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../../containers/Header/Header'
import { getMovieData } from '../../util/apiCalls'
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { addMovies, setError } from '../../actions/index';
import { Route } from 'react-router-dom'
import ShowPage from '../../components/ShowPage/ShowPage';
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
        <Route exact path='/' render={() => <Header /> } />
        <Route path='/login' render={() => <LoginForm />} />
        <Route exact path='/' render={() => <MoviesContainer />} />
        <Route path='/movies/:id' render={({match}) => {
          const selectedShowpage = this.props.movies.find(movie => {
            return movie.id === parseInt(match.params.id)
          });
          return (!selectedShowpage) ? null : <ShowPage movie={selectedShowpage} />
        }}
        />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies
  
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addMovies,
    setError
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  movies: PropTypes.array
}

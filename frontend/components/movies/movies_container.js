import Movies from './movies';
import {connect} from 'react-redux';
import {fetchMovies, fethcMovie} from '../../actions/movie_actions';

const msp = state => {
    return({
        movies: Object.values(state.entities.movies)
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
    })
}

export default connect(msp,mdp)(Movies)
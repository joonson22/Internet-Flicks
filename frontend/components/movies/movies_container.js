import Movies from './movies';
import {connect} from 'react-redux';
import {fetchMovies, fetchMovie} from '../../actions/movie_actions';
import {filter} from '../../reducers/selector'

const msp = state => {
    return({
        movies: Object.values(state.entities.movies)
        
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: (id) => dispatch(fetchMovie(id))
        
    })
}

export default connect(msp,mdp)(Movies)
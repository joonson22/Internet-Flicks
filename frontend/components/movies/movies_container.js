import Movies from './movies';
import {connect} from 'react-redux';
import {fetchMovies, fetchMovie} from '../../actions/movie_actions';
import { openPopout } from '../../actions/popout_actions'
import {filter} from '../../reducers/selector'
import {showNavbar} from '../../actions/navbar_action'

const msp = (state,ownProps) => {
  
    return({
        movies: Object.values(state.entities.movies),
        boolean: state.ui.popout
        
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: (id) => dispatch(fetchMovie(id)),
        openPopout: () => dispatch(openPopout()),
        showNavbar: () => dispatch(showNavbar())

        
    })
}

export default connect(msp,mdp)(Movies)
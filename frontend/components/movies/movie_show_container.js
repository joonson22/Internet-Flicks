import { connect } from 'react-redux';
import { fetchMovies, fetchMovie } from '../../actions/movie_actions';
import MovieShow from './movie_show';
import { hideNavbar} from '../../actions/navbar_action'


const msp = (state,ownProps) => {
    return({
        movie: state.entities.movies[ownProps.match.params.movieId],
        navbar: state.ui.navbar
    })
}

const mdp = dispatch => {
    return({
        fetchMovie: (id) => dispatch(fetchMovie(id)),
        hideNavbar: () => dispatch(hideNavbar())
    })
}

export default connect(msp,mdp)(MovieShow)
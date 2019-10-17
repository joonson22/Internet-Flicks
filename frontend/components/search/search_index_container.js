import { connect } from 'react-redux';
import { showNavbar } from '../../actions/navbar_action';
import SearchIndex from './search_index';
import { fetchMovies} from '../../actions/movie_actions';


const msp = state => {
debugger
    return({
        search: state.ui.search,
        movies: Object.values(state.entities.movies)
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        showNavbar: () => dispatch(showNavbar())
    })
}

export default connect(msp,mdp)(SearchIndex)
import { connect } from 'react-redux';
import { showNavbar } from '../../actions/navbar_action';
import SearchIndex from './search_index';
import { fetchMovies} from '../../actions/movie_actions';
import { createMylist } from '../../actions/mylist_actions';


const msp = state => {
// debugger
    return({
        search: state.ui.search,
        movies: Object.values(state.entities.movies),
        userId: state.session.id
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        showNavbar: () => dispatch(showNavbar()),
        createMylist: (mylist) => dispatch(createMylist(mylist))
    })
}

export default connect(msp,mdp)(SearchIndex)
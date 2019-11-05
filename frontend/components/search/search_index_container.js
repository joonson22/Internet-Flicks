import { connect } from 'react-redux';
import { showNavbar } from '../../actions/navbar_action';
import SearchIndex from './search_index';
import { fetchMovies} from '../../actions/movie_actions';
import { createMylist, fetchMylist, deleteMylist } from '../../actions/mylist_actions';



const msp = state => {
    return({
        search: state.ui.search,
        movies: Object.values(state.entities.movies),
        userId: state.session.id,
        mylists: Object.values(state.entities.mylist)
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        showNavbar: () => dispatch(showNavbar()),
        createMylist: (mylist) => dispatch(createMylist(mylist)),
        fetchMylist: () => dispatch(fetchMylist()),
        deleteMylist: (id) => dispatch(deleteMylist(id)),
    })
}

export default connect(msp,mdp)(SearchIndex)
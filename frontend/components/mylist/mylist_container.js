import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchMylist, deleteMylist } from '../../actions/mylist_actions';
import Mylist from './mylist'

const msp = state => {
    // debugger
    return({
        user: state.entities.users[state.session.id],
        mylists: Object.values(state.entities.mylist),
        movies: state.entities.movies
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMylist: () => dispatch(fetchMylist()),
        deleteMylist: (id) => dispatch(deleteMylist(id))
    })
}

export default connect(msp,mdp)(Mylist)
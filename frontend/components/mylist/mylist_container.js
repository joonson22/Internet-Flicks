import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchMylist } from '../../actions/mylist_actions'
import Mylist from './mylist'

const msp = state => {
    debugger
    return({
        user: state.entities.user[state.session.id]
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMylist: (id) => dispatch(fetchMylist(id))
    })
}

export default connect(msp,mdp)(Mylist)
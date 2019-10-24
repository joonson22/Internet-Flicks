import MovieItemPopout from './movie_item_popout';
import { connect } from 'react-redux';
import { closePopout} from '../../actions/popout_actions'
import {fetchMovie} from '../../actions/movie_actions'
import { createMylist, fetchMylist, deleteMylist } from '../../actions/mylist_actions';

const msp = (state, ownProps) => {
   
    return({
        boolean: state.ui.popout,
        movie: state.entities.movies[ownProps.movieId],
        moviePopoutId: ownProps.movieId,
        user: state.session,
        mylists: Object.values(state.entities.mylist)
    })
}

const mdp = dispatch => {
    return({
        closePopout: () => dispatch(closePopout()),
        fetchMovie: (id) => dispatch(fetchMovie(id)),
        createMylist: (mylist) => dispatch(createMylist(mylist)),
        fetchMylist: () => dispatch(fetchMylist()),
        deleteMylist: (id) => dispatch(deleteMylist(id)),
    })
}

export default connect(msp,mdp)(MovieItemPopout)
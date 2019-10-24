import Movies from './movies';
import {connect} from 'react-redux';
import {fetchMovies, fetchMovie} from '../../actions/movie_actions';
import { openPopout, setPopout } from '../../actions/popout_actions'
import {showNavbar} from '../../actions/navbar_action'
import { createMylist, fetchMylist, deleteMylist } from '../../actions/mylist_actions';


const msp = (state,ownProps) => {
  
    return({
        movies: Object.values(state.entities.movies),
        boolean: state.ui.popout,
        userId: state.session.id,
        mylists: Object.values(state.entities.mylist),
        popoutId: state.ui.popoutId
        
    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: (id) => dispatch(fetchMovie(id)),
        openPopout: () => dispatch(openPopout()),
        showNavbar: () => dispatch(showNavbar()),
        createMylist: (mylist) => dispatch(createMylist(mylist)),
        fetchMylist: () => dispatch(fetchMylist()),
        deleteMylist: (id) => dispatch(deleteMylist(id)),
        setPopout: (id) => dispatch(setPopout(id))

        
    })
}

export default connect(msp,mdp)(Movies)
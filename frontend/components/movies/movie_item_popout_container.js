import MovieItemPopout from './movie_item_popout';
import { connect } from 'react-redux';
import { closePopout} from '../../actions/popout_actions'
import {fetchMovie} from '../../actions/movie_actions'

const msp = (state, ownProps) => {
   
    return({
        boolean: state.ui.popout,
        movie: state.entities.movies[ownProps.movieId],
        moviePopoutId: ownProps.movieId
    })
}

const mdp = dispatch => {
    return({
        closePopout: () => dispatch(closePopout),
        fetchMovie: (id) => dispatch(fetchMovie(id))
    })
}

export default connect(msp,mdp)(MovieItemPopout)
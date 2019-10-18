import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import Mylist from './mylist'

const msp = state => {
    return({

    })
}

const mdp = dispatch => {
    return({
        fetchMovies: () => dispatch(fetchMovies())
    })
}

export default connect(msp,mdp)(Mylist)
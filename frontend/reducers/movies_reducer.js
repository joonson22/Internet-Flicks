import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions';

const moviesReducer = (oldState = {}, action) => {
    Object.freeze();
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_MOVIES:
            return action.movies;
        case RECEIVE_MOVIE:
            newState = Object.assign({}, oldState, {[action.movie.id]: action.movie})
            return newState;
        default:
            return oldState;
    }
}

export default moviesReducer
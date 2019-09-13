export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
import * as MovieUtil from '../util/movies_api_utils'
const receiveMovies = (movies) => {
    return({
        type: RECEIVE_ALL_MOVIES,
        movies
    })
}

const receiveMovie = (movie) => {
    return({
        type: RECEIVE_MOVIE,
        movie
    })
}

export const fetchMovies = () => dispatch =>  {
    return MovieUtil.fetchMovies().then(movies =>  dispatch(receiveMovies(movies)))
}

export const fetchMovie = (id) => dispatch =>  {
    return MovieUtil.fetchMovie(id).then(movie => dispatch(receiveMovie(movie)))
}


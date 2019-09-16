export const filter = (genre, state) => {
    let movies = Object.values(state.entities.movies)
    return movies.filter(movie => movie.genre === genre)
}
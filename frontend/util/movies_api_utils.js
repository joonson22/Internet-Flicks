export const fetchMovies = () => {
    return (
        $.ajax({
            method: "GET",
            url: 'api/movies'
        })
    )
}

export const fetchMovie = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `api/movies/${id}`
        })
    )
} 
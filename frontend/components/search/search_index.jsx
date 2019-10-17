import React from 'react';
import MovieItem from '../movies/movie_item';

class SearchIndex extends React.Component {
    componentDidMount(){
        this.props.showNavbar();
        this.props.fetchMovies();
    }


    render() {
        debugger
        if (this.props.movies.length === 0) {
            return null;
        }
        let filteredMovies = this.props.movies.filter(movie => {
            return movie.title.toLowerCase() === this.props.search.toLowerCase() || movie.genre.toLowerCase() === this.props.search.toLowerCase()
        })

        return(
            <div>
                <ul>
                    {filteredMovies.map(movie => {
                        return <MovieItem movie={movie} />
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchIndex
import React from 'react';

class Mylist extends React.Component {
    componentDidMount(){
        // debugger
        this.props.fetchMylist()
        this.props.fetchMovies()
    }

    render() {
        // debugger
        if (!this.props.mylists) {
            return null
        }

        if (!this.props.movies) {
            return null
        }

        let movies = this.props.movies.filter(movie => {
            for(let i = 0; i < this.props.mylists.length; i++) {
                if (this.props.mylists[i].movie_id === movie.id) {
                    return movie;
                }
            }
        })
        
        return(
            <div>
                <ul>
                    {movies.map(movie => {
                        return movie.title
                    })}
                </ul>
            </div>
        )
    }
}

export default Mylist
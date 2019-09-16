import React from 'react';
import {Link} from 'react-router-dom'
import MovieItem from './movie_item'

class Movies extends React.Component {

    componentDidMount(){
        this.props.fetchMovies();
    }

    render (){
        
        return(
            <div className='movie-container'>
                
                <div className='action-container'>
                    <h1>Action</h1>
                    <ul>
                        {this.props.movies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} />
                        })}
                    </ul>
                </div>

                {/* <div className='comedy-container'>
                    <h1>Comedy</h1>
                    <ul>
                        {this.props.movies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} />
                        })}
                    </ul>
                </div>

                <div className='horror-container'>
                    <h1>Horror</h1>
                    <ul>
                        {this.props.movies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} />
                        })}
                    </ul>
                </div> */}

                
            </div>
        )
    }
}

export default Movies
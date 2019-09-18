import React from 'react';
import {Link} from 'react-router-dom'
import MovieItem from './movie_item'
import MovieItemPopoutContainer from './movie_item_popout_container'

class Movies extends React.Component {
    constructor(props) {
        super(props);
        
    }
   

    componentDidMount(){
        this.props.fetchMovies();
    }

    render (){
        let actionMovies = this.props.movies.filter(movie => movie.genre === 'Action')
        let comedyMovies = this.props.movies.filter(movie => movie.genre === 'Comedy')
        return(
            <div className='movie-container'>
                
                <div className='action-container'>
                    <h1>Action</h1>
                    <ul>
                        {actionMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} fetchMovie={this.props.fetchMovie}/>
                        })}
                    </ul>
                </div>

                 <div className='comedy-container'>
                     <div className='genre-title'> 
                        <h1>Comedy</h1>
                     </div>
                     <ul className='comedy-movies'>
                        {comedyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout}/>
                        })}
                    
                        {comedyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout}/>
                        })}
                    
                        {comedyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout}/>
                        })}
                    
                        {comedyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout}/>
                        })}
                        {comedyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout}/>
                        })}
                        {comedyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout}/>
                        })}
                     </ul>
                     {this.props.boolean ? (
                        <div className='movie-popout'>
                            <MovieItemPopoutContainer movieId={this.props.match.params.movieId}/>
                        </div>
                     ) : (
                         null
                     )}
                </div>

                {/* <div className='horror-container'>
                    <h1>Horror</h1>
                    <ul>
                        {this.props.movies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} />
                        })}
                    </ul>
                </div>  */}
            </div>
        )
    }
}

export default Movies
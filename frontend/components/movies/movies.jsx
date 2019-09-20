import React from 'react';
import {Link} from 'react-router-dom'
import MovieItem from './movie_item'
import MovieItemPopoutContainer from './movie_item_popout_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class Movies extends React.Component {
    constructor(props) {
        super(props);
        
    }
   

    componentDidMount(){
        this.props.fetchMovies();
        this.props.showNavbar();
    }

    render (){
        if (this.props.movies.length === 0) {
            return null;
        }
        let indexMovie = this.props.movies.filter(movie => movie.title === 'Forrest Gump')
        let actionMovies = this.props.movies.filter(movie => movie.genre === 'Action')
        let comedyMovies = this.props.movies.filter(movie => movie.genre === 'Comedy')
        return(
            <div className='movie-container'>
                <div className='index-movie-container'>
                    <video className='index-movie' controls autoplay='autoplay' width='500' height='500'  >
                        <source src={indexMovie[0].videoUrl} type='video/mp4' />
                    </video> 
                    <div className='index-movie-content'>
                        <h1>{indexMovie[0].title}</h1>
                        <button className='index-play-btn'>
                            <FontAwesomeIcon icon={faPlay} />
                            Play
                        </button>
                        <button className='index-mylist-btn'>
                            <FontAwesomeIcon icon={faPlus} />
                            My list
                        </button>
                    </div>
                </div>
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

               
                {/* <div>
                    <h1>FOOOOOOTTTTER</h1>
                </div> */}
            </div>
        )
    }
}

export default Movies
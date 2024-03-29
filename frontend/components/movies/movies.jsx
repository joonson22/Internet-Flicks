import React from 'react';
import {Link} from 'react-router-dom'
import MovieItem from './movie_item'
import MovieItemPopoutContainer from './movie_item_popout_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import Carousel from '../carousel/carousel';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.mylistId = null;
        this.indexId = null;
        this.handleMylist = this.handleMylist.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
   

    componentDidMount(){
        this.props.fetchMovies();
        this.props.showNavbar();
        this.props.fetchMylist();
    }

    handleMylist() {
        let mylist = {
            mylist: {
                user_id: this.props.userId,
                movie_id: this.indexId
            }
        }
        this.props.createMylist(mylist);
    }

    handleDelete() {
        this.props.deleteMylist(this.mylistId)
            .then(() => {
                this.props.fetchMylist()
            })

    }

    render (){
        if (this.props.movies.length === 0) {
            return null;
        }

        let indexMovie = this.props.movies.filter(movie => movie.title === 'GodFather')
        this.indexId = indexMovie[0].id
        let actionMovies = this.props.movies.filter(movie => movie.genre === 'Action')
        let comedyMovies = this.props.movies.filter(movie => movie.genre === 'Comedy')
        let horrorMovies = this.props.movies.filter(movie => movie.genre === 'Horror')
        let fantasyMovies = this.props.movies.filter(movie => movie.genre === 'Fantasy')
        let animationMovies = this.props.movies.filter(movie => movie.genre === 'Animation')
        let animeMovies = this.props.movies.filter(movie => movie.genre === 'Anime')

        let exist = this.props.mylists.find(x => x.movie_id === this.indexId)
        if (exist) {
            this.mylistId = exist.id
        }

        return(
            <div className='movie-container'>
                <div className='index-movie-container'>
                    <img src={indexMovie[0].photoUrl} className='index-movie' alt="The Godfather" />  
                    <div className='index-movie-content'>
                        <h1>{indexMovie[0].title}</h1>
                        <p>{indexMovie[0].body}</p>
                        <Link to={`/movie/${indexMovie[0].id}`}>
                            <button className='index-play-btn'>
                                <FontAwesomeIcon icon={faPlay} />
                                Play
                            </button>
                        </Link>
                        {exist ? (
                            <button onClick={this.handleDelete} className='index-mylist-btn'>
                                <FontAwesomeIcon icon={faMinus} />
                                My List
                            </button>
                        ) : (
                                <button onClick={this.handleMylist} className='index-mylist-btn'>
                                    <FontAwesomeIcon icon={faPlus} />
                                    My List
                                </button>
                            )}
                    </div>
                </div>
        
                <div className='genre-container'>
                    <div className='genre-title'>
                        <h1>Action</h1>
                    </div>
                    <ul className='genre-movies'>
                        {actionMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                        {actionMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                    </ul>
                    {this.props.boolean && this.props.popoutId === 1 ? (
                        <div className='movie-popout'>
                            <MovieItemPopoutContainer movieId={this.props.match.params.movieId} />
                        </div>
                    ) : (
                            null
                        )}
                </div>

                 <div className='genre-container'>
                     <div className='genre-title'> 
                        <h1>Comedy</h1>
                     </div>
                     <ul className='genre-movies'>
                        {comedyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                        {comedyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                     </ul>
                    {this.props.boolean && this.props.popoutId === 2 ? (
                        <div className='movie-popout'>
                            <MovieItemPopoutContainer movieId={this.props.match.params.movieId}/>
                        </div>
                     ) : (
                         null
                     )}
                </div>

                 <div className='genre-container'>
                     <div className='genre-title'> 
                        <h1>Horror</h1>
                     </div>
                     <ul className='genre-movies'>
                        {horrorMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                        {horrorMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                    
                     </ul>
                    {this.props.boolean && this.props.popoutId === 3 ? (
                        <div className='movie-popout'>
                            <MovieItemPopoutContainer movieId={this.props.match.params.movieId}/>
                        </div>
                     ) : (
                         null
                     )}
                </div>

                 <div className='genre-container'>
                     <div className='genre-title'> 
                        <h1>Fantasy</h1>
                     </div>
                     <ul className='genre-movies'>
                        {fantasyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                        {fantasyMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                    
                     </ul>
                    {this.props.boolean && this.props.popoutId === 4 ? (
                        <div className='movie-popout'>
                            <MovieItemPopoutContainer movieId={this.props.match.params.movieId}/>
                        </div>
                     ) : (
                         null
                     )}
                </div>

                 <div className='genre-container'>
                     <div className='genre-title'> 
                        <h1>Animation</h1>
                     </div>
                     <ul className='genre-movies'>
                        {animationMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                        {animationMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                    
                     </ul>
                    {this.props.boolean && this.props.popoutId === 5 ? (
                        <div className='movie-popout'>
                            <MovieItemPopoutContainer movieId={this.props.match.params.movieId}/>
                        </div>
                     ) : (
                         null
                     )}
                </div>

                 <div className='genre-container'>
                     <div className='genre-title'> 
                        <h1>Anime</h1>
                     </div>
                     <ul className='genre-movies'>
                        {animeMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                        {animeMovies.map((movie, i) => {
                            return <MovieItem movie={movie} key={i} openPopout={this.props.openPopout} popoutId={this.props.popoutId} setPopout={this.props.setPopout}/>
                        })}
                    
                     </ul>
                    {this.props.boolean && this.props.popoutId === 6 ? (
                        <div className='movie-popout'>
                            <MovieItemPopoutContainer movieId={this.props.match.params.movieId}/>
                        </div>
                     ) : (
                         null
                     )}
                </div>

            </div>
        )
    }
}

export default Movies
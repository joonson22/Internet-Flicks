import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
class MovieItemPopout extends React.Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.moviePopoutId)
    }


    render() {
        if (!this.props.movie) {
            return null;
        }
    
        return(
            <div className='movie-popout'>
                <div className='popout-bg'>
                    <div className='popout-left'>
                        <h1>{this.props.movie.title}</h1>
                        <h3>{this.props.movie.rating} {this.props.movie.year}</h3>
                        <h2>{this.props.movie.body}</h2>
                        <Link to={`/movie/${this.props.movie.id}`}>
                            <button className='popout-play-btn'>
                                <FontAwesomeIcon icon={faPlay} />
                                Play
                            </button>
                        </Link>

                        <Link to='#'>
                            <button className='popout-mylist-btn'>
                                <FontAwesomeIcon icon={faPlus} />
                                My list
                            </button>
                        </Link>
                    </div>
                    <div className='popout-right'>
                        <video autoPlay='autoplay' className='popout-video'>
                            <source src={this.props.movie.videoUrl} type='video/mp4' />
                        </video>
                        <button onClick={this.props.closePopout} className='popout-close'>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieItemPopout
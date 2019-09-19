import React from 'react'
import { Link } from 'react-router-dom'

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
                            <button>Link to show page</button>
                        </Link>

                        <Link to='#'>
                            <button>Link to my list</button>
                        </Link>
                    </div>
                    <div className='popout-right'>
                        <video autoPlay='autoplay' className='popout-video'>
                            <source src={this.props.movie.videoUrl} type='video/mp4' />
                        </video>
                        <button onClick={this.props.closePopout}>Close popout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieItemPopout
import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
class MovieShow extends React.Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.movieId)
        this.props.hideNavbar()
    }

    render() {
      
        if (!this.props.movie) {
            return null
        }
        return(
            <div className='show-container'>
                <video width='500' height='500' controls className='show-movie'>
                    <source src={this.props.movie.videoUrl} type='video/mp4'/>
                </video> 
                <Link to='/movies' className='abc'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                Link back to Index
                </Link>
                
            </div>
        )
    }
}

export default MovieShow
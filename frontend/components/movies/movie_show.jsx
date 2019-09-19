import React from 'react';

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
                    <source src={this.props.movie.videoUrl} type='video.mp4'/>
                </video> 
            </div>
        )
    }
}

export default MovieShow
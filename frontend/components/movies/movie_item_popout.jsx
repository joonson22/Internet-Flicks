import React from 'react'

class MovieItemPopout extends React.Component {
    render() {
        return(
            <div className='movie-popout'>
                <div className='popout-content'>
                    <h1>{this.props.movie.title}</h1>
                    <h3>{this.props.movie.rating}</h3>
                    <h3>{this.props.movie.body}</h3>
                    <h3>{this.props.movie.year}</h3>
                </div>
                <video width='251' height='141' controls onMouseLeave={this.handleLeave.bind(this)}>
                    <source src={this.props.movie.videoUrl} type='video/mp4' />
                </video>
            </div>
        )
    }
}

export default MovieItemPopout
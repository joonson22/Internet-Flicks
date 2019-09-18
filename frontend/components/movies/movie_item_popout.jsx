import React from 'react'

class MovieItemPopout extends React.Component {
    render() {
        return(
            <div className='movie-popout'>
                <div className='popout-bg'>
                    <div className='popout-left'>
                        <h1>{this.props.movie.title}</h1>
                        <h3>{this.props.movie.rating}</h3>
                        <h3>{this.props.movie.body}</h3>
                        <h3>{this.props.movie.year}</h3>
                    </div>
                    <div className='popout-right'>
                    <video width='251' height='141' controls >
                        <source src={this.props.movie.videoUrl} type='video/mp4' />
                    </video>
                    </div>
                </div>
                <div className='popout-content'>
                </div>
            </div>
        )
    }
}

export default MovieItemPopout
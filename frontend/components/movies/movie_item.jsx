import React from 'react';

class MovieItem extends React.Component {
   
    render() {
        
        return(
            <div className='movie'>
                <h1>{this.props.movie.title}</h1>
                <video width='251' height='141' controls>
                    <source src={this.props.movie.videoUrl} type='video/mp4'/>
                </video>
            </div>
        )
    }
}

export default MovieItem;
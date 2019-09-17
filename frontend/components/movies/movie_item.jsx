import React from 'react';
import MovieItemPopout from './movie_item_popout'

class MovieItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag: true,
            popup: false
        }
        this.handleEnter = this.handleEnter.bind(this)
        // this.handleLeave - this.handleLeave.bind(this)
    }

    handleEnter() {
        this.setState({
            flag: false
        })
    }

    handleLeave() {
        this.setState({
            flag: true
        })
    }

    handleClick() {
        this.setState({
            popup: true
        })
    }
   
    render() {
        
        return(
            <li className='movie-item' >
                {/* <h1>{this.props.movie.title}</h1> */}
                {this.state.flag ? (
                    <img src={this.props.movie.photoUrl} width='251' height='141' alt=""  onMouseEnter={this.handleEnter}/>
                ) : (
                    <video width='251' height='141' controls onMouseLeave={this.handleLeave.bind(this)}>
                        <source src={this.props.movie.videoUrl} type='video/mp4'/>
                    </video>
                )      
                }
                <button onClick={this.handleClick} className='popup-btn'></button>
                {this.state.popup ? 
                    (
                        <MovieItemPopout movie={this.props.movie} />
                    ) : (
                        ""
                    )
                }
            </li>
        )
    }
}

export default MovieItem;
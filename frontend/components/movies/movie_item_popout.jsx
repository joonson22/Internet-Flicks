import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

class MovieItemPopout extends React.Component {
    constructor(props) {
        super(props);
        this.handleMylist = this.handleMylist.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.mylistId = null;
    }
    componentDidMount() {
        this.props.fetchMovie(this.props.moviePopoutId)
        this.props.fetchMylist();
    }

    handleMylist() {
        let mylist = {
            mylist: {
                user_id: this.props.user.id,
                movie_id: this.props.movie.id
            }
        }
        this.props.createMylist(mylist);
    }

    handleDelete() {
    // debugger
    this.props.deleteMylist(this.mylistId)
        .then(() => {
            this.props.fetchMylist()
        })
    }
    render() {
        if (!this.props.movie) {
            return null;
        }
        
        if (this.props.mylists.length === 0) {
            return null;
        }
        let exist = this.props.mylists.find(x => x.movie_id === this.props.movie.id)
        if (exist) {
            this.mylistId = exist.id
        }

        return(
            <div className='movie-popout'>
                <div className='popout-bg'>
                    <div className='popout-left'>
                        <h1>{this.props.movie.title}</h1>
                        <div className='popoutSubtext'>
                            <h3 className='rating'>{this.props.movie.rating} </h3>
                            <h3 className='year'>{this.props.movie.year}</h3>
                            <h3 className='green-text'>Over 9000% Match</h3>
                        </div>
                        <h2>{this.props.movie.body}</h2>
                        <Link to={`/movie/${this.props.movie.id}`}>
                            <button className='popout-play-btn'>
                                <FontAwesomeIcon icon={faPlay} />
                                Play
                            </button>
                        </Link>

                        {exist ? (
                            <button onClick={this.handleDelete} className='popout-mylist-btn'>
                                <FontAwesomeIcon icon={faMinus} />
                                My List
                            </button>
                        ) : (
                                <button onClick={this.handleMylist} className='popout-mylist-btn'>
                                    <FontAwesomeIcon icon={faPlus} />
                                    My List
                                </button>
                            )}
                        {/* <Link to='#'>
                            <button className='popout-mylist-btn' onClick={this.handleMylist}>
                                <FontAwesomeIcon icon={faPlus} />
                                My list
                            </button>
                        </Link> */}
                    </div>
                    <div className='popout-right'>
                        <video autoPlay='autoPlay' className='popout-video'>
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
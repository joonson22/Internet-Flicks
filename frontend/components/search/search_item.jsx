import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';

class SearchItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag: true,
        }
        this.mylistId = null;
        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleMylist = this.handleMylist.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleMute = this.handleMute.bind(this);
    }

    handleMylist() {
        let mylist = {
            mylist: {
                user_id: this.props.userId,
                movie_id: this.props.movie.id
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

    handleMute() {
        let vid = document.querySelector('.search-video')
        let mute = document.querySelector('.search-mute-btn')
        let mute2 = document.querySelector('.search-mute2-btn')
        if (vid.muted) {
            vid.muted = false;
            mute2.classList.remove('search-mute2-btn')
            mute2.className += " " + 'search-mute-btn'
        } else {
            vid.muted = true;
            mute.classList.remove('search-mute-btn')
            mute.className += " " + 'search-mute2-btn'
        }
    }

 
   
    render() {
        let exist = this.props.mylists.find(x => x.movie_id === this.props.movie.id)
        if (exist) {
            this.mylistId = exist.id
        }
        return(
            <div onMouseLeave={this.handleLeave} className='search-item'>
                {this.state.flag ? (
                    <img src={this.props.movie.photoUrl} width='295' height='166' alt="" onMouseEnter={this.handleEnter} />
                ) : (
                    <div>
                        <video width='295' height='166' autoPlay muted onMouseEnter={this.handleEnter} className='search-video'>
                            <source src={this.props.movie.videoUrl} type='video/mp4' />
                        </video>
                           
                        <Link to={`/movie/${this.props.movie.id}`}>
                            <button className='search-play-btn'>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </Link>
                        {exist ? (
                            <button onClick={this.handleDelete} className='search-plus-btn'>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        ) : (
                            <button onClick={this.handleMylist} className='search-plus-btn'>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        )}
                        <button onClick={this.handleMute} className='search-mute2-btn'>
                            <FontAwesomeIcon icon={faVolumeMute} />
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

export default SearchItem;
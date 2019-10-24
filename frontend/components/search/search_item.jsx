import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
class SearchItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag: true,
        }
        this.mylistId = null;
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
        this.handleMylist = this.handleMylist.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
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
        // debugger
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
                        <video width='295' height='166' controls onMouseEnter={this.handleEnter}>
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
                    </div>
                )}
            </div>
        )
    }
}

export default SearchItem;
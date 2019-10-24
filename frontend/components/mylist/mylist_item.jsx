import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class MylistItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            flag: true
        }

        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        // debugger
        this.props.deleteMylist(this.props.mylistId)
            .then(() => {
                // debugger
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

    render(){
        
        return (
            <div onMouseLeave={this.handleLeave} className='mylist-item'>
                {this.state.flag ? (
                    <img src={this.props.movie.photoUrl} width='295' height='166' alt="" onMouseEnter={this.handleEnter} />
                    ) : (
                        <div>
                            <video width='295' height='166' controls onMouseEnter={this.handleEnter}>
                                <source src={this.props.movie.videoUrl} type='video/mp4' />
                            </video>
                            <Link to={`/movie/${this.props.movie.id}`}>
                                <button className='mylist-play-btn'>
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            </Link>
                            <button onClick={this.handleDelete} className='mylist-minus-btn'>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                    )}
               
                 
            </div>
        )
    }
}

export default MylistItem;
import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
class SearchItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag: true,
        
        }
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
      
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
        return(
            <div onMouseLeave={this.handleLeave} className='search-item'>
                {this.state.flag ? (
                    <img src={this.props.movie.photoUrl} width='295' height='166' alt="" onMouseEnter={this.handleEnter} />
                ) : (
                    <video width='295' height='166' controls onMouseEnter={this.handleEnter}>
                        <source src={this.props.movie.videoUrl} type='video/mp4' />
                    </video>
                )}
            </div>
        )
    }
}

export default SearchItem;
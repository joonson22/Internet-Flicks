import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
class MovieItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag: true,
        
        }
        this.handleEnter = this.handleEnter.bind(this)
        this.handleClick = this.handleClick.bind(this)
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
        this.props.openPopout();
 
        if (this.props.movie.genre === 'Action') {
            
            this.props.setPopout(1)
        } else if (this.props.movie.genre === 'Comedy') {
            this.props.setPopout(2)
        } else if (this.props.movie.genre === 'Horror') {
            this.props.setPopout(3)
        } else if (this.props.movie.genre === 'Fantasy') {
            this.props.setPopout(4)
        } else if (this.props.movie.genre === 'Animation') {
            this.props.setPopout(5)
        } else if (this.props.movie.genre === 'Anime') {
            this.props.setPopout(6)
        }
    }
 
   
    render() {
        
        return(
            <li className='movie-item' onMouseLeave={this.handleLeave.bind(this)}>
                    {/* <h1>{this.props.movie.title}</h1> */}
                    {this.state.flag ? (
                    <img src={this.props.movie.photoUrl} width='295' height='166' alt="" onMouseEnter={this.handleEnter}/>  
                    ) : (
                       <div>
                        <img src={this.props.movie.photoUrl} width='420' height='258' alt="" onMouseEnter={this.handleEnter} />  
                           {/* <video width='420' height='258' controls >
                               <source src={this.props.movie.videoUrl} type='video/mp4'/>
                           </video> */}
                                <Link to={`/movies/${this.props.movie.id}`}>
                                    <button onClick={this.handleClick} className='popout-btn'>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </button>
                                </Link>
                           
                       </div>
                    )      
                    }
                    
                </li>     
        )
    }
}

export default MovieItem;
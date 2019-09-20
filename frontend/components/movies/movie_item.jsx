import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
class MovieItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag: true,
        
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

 
   
    render() {
        
        return(
            <li className='movie-item' onMouseLeave={this.handleLeave.bind(this)}>
                    {/* <h1>{this.props.movie.title}</h1> */}
                    {this.state.flag ? (
                    <img src={this.props.movie.photoUrl} width='295' height='166' alt="" onMouseEnter={this.handleEnter}/>  
                    ) : (
                       <div>
                           <video width='420' height='258' controls >
                               <source src={this.props.movie.videoUrl} type='video/mp4'/>
                           </video>
                                <Link to={`/movies/${this.props.movie.id}`}>
                                    <button onClick={this.props.openPopout} className='popout-btn'>
                                        <FontAwesomeIcon icon={faCaretDown} />
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
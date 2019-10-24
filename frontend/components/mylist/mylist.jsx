import React from 'react';
import MylistItem from './mylist_item';

class Mylist extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount(){
        this.props.fetchMylist()
        this.props.fetchMovies()
    }

    handleDelete() {
        this.props.deleteMylist(this.props.movie.id)
    }
    
    
    render() {
        // debugger
        if (this.props.mylists.length === 0) {
            return null
        }

        if (Object.keys(this.props.movies).length === 0) {
            return null
        }
        
        return(
            <div className='mylist-container'>
                <ul>
                    {this.props.mylists.map(mylist => {
                        let movie = this.props.movies[mylist.movie_id]
                        return <MylistItem movie={movie} mylistId={mylist.id} deleteMylist={this.props.deleteMylist} fetchMylist={this.props.fetchMylist}/>
                    })}
                    
                </ul>
            </div>
        )
    }
}

export default Mylist
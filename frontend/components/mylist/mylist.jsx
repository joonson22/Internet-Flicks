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
        if (!this.props.mylists) {
            return null
        }

        if (!this.props.movies) {
            return null
        }

        let movies = this.props.movies.filter(movie => {
            for(let i = 0; i < this.props.mylists.length; i++) {
                if (this.props.mylists[i].movie_id === movie.id) {
                    return movie;
                }
            }
        })
        
        return(
            <div>
                <ul>
                    {movies.map((movie,i) => {
                        let mylistId = this.props.mylists[i].id
                        return <li>
                                <MylistItem movie={movie} deleteMylist={this.props.deleteMylist} mylistId={mylistId} fetchMylist={this.props.fetchMylist}/>
                            </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Mylist
import React from 'react';
import SearchItem from './search_item';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true
        }
        this.handleEnter = this.handleEnter.bind(this)
        // this.handleLeave = this.handleLeave.bind(this)
    }
    componentDidMount(){
        this.props.showNavbar();
        this.props.fetchMovies();
        this.props.fetchMylist();
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
        if (this.props.movies.length === 0) {
            return null;
        }

        // if (this.props.mylists.length === 0) {
        //     return null;
        // }
        
        let filteredMovies = this.props.movies.filter(movie => {
            return movie.title.toLowerCase().includes(this.props.search.toLowerCase()) || movie.genre.toLowerCase() === this.props.search.toLowerCase()
        })

        return(
            <div className='search-index-container'>
                <h1 className='search-word'>{this.props.search}</h1>
                {filteredMovies.length === 0 ? (
                    <h2 className='search-message'>No result matches your criteria, please search again.</h2>
                ) : (
                    <ul>
                        {filteredMovies.map((movie,i) => {
                            return <SearchItem movie={movie} key={i} createMylist={this.props.createMylist} userId={this.props.userId} fetchMylist={this.props.fetchMylist} deleteMylist={this.props.deleteMylist} mylists={this.props.mylists}/>
                        })}
                        {filteredMovies.map((movie,i) => {
                            return <SearchItem movie={movie} key={i} createMylist={this.props.createMylist} userId={this.props.userId} fetchMylist={this.props.fetchMylist} deleteMylist={this.props.deleteMylist} mylists={this.props.mylists}/>
                        })}
                    </ul>
                )}
             
            </div>
        )
    }
}

export default SearchIndex
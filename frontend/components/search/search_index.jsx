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
        // debugger
        if (this.props.movies.length === 0) {
            return null;
        }
        let filteredMovies = this.props.movies.filter(movie => {
            return movie.title.toLowerCase() === this.props.search.toLowerCase() || movie.genre.toLowerCase() === this.props.search.toLowerCase()
        })

        return(
            <div className='search-index-container'>
                <ul>
                    {filteredMovies.map(movie => {
                        return <SearchItem movie={movie}/>
                    })}
                    {filteredMovies.map(movie => {
                        return <SearchItem movie={movie}/>
                    })}
                </ul>
             
            </div>
        )
    }
}

export default SearchIndex
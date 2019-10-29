import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.updateSearch(this.state.query)
        this.setState({
            query: ''
        })
        this.props.history.push('/search')
        
    }

    update(e) {
        return e => this.setState({
            query: e.target.value
        })
    }

    render(){
        
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit} className='search-bar-container'>
                    <button className='search-icon'>
                        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                    </button>
                    <input type="text" className='search-bar-input' placeholder='Title, genre...' onChange={this.update('query')} value={this.state.query} />
                </form>
            </div>
        )
    }
}

export default Search;
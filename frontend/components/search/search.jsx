import React from 'react';

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
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Title, genre...' onChange={this.update('query')} value={this.state.query}/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }
}

export default Search;
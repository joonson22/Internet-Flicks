import React from 'react';

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
            <div onMouseLeave={this.handleLeave} className='search-item'>
                {this.state.flag ? (
                    <img src={this.props.movie.photoUrl} width='295' height='166' alt="" onMouseEnter={this.handleEnter} />
                ) : (
                        <video width='295' height='166' controls onMouseEnter={this.handleEnter}>
                            <source src={this.props.movie.videoUrl} type='video/mp4' />
                        </video>
                    )}
                    <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default MylistItem;
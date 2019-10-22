import React from 'react';

class Mylist extends React.Component {
    componentDidMount(){
        // debugger
        this.props.fetchMylist(13)
    }

    render() {
        
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default Mylist
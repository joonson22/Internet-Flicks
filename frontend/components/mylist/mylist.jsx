import React from 'react';

class Mylist extends React.Component {
    componentDidMount(){
        // debugger
        this.props.fetchMylist(this.props.user.mylist.id)
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
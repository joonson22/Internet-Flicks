import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault;
        let user = Object.assign({}, this.state)
        this.props.processForm(user)
    }
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => {
                    return error
                })}

            </ul>

        )
    }
    render(){
        return(
            this.props.formType === 'login' ? (
                <div>
                    <header>Log In</header>
                    <br/>
                        {this.renderErrors()}
                        <form action=""onSubmit={this.handleSubmit}>
                            <label htmlFor="">Username
                                <input type="text" value={this.state.username} onChange={this.update("username")}/>
                            </label>
                            <label htmlFor="">Password
                                <input type="password" value={this.state.password} onChange={this.update('password')}/>
                            </label>
                            <input type="submit" value='login'/>
                        </form>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            ) : (
                <div>
                    <header>Sign Up
                        <br/>
                        {this.renderErrors()}
                        <form action="" onSubmit={this.handleSubmit}>
                            <label htmlFor="">Username
                                <input type="text" value={this.state.username} onChange={this.update("username")} />
                            </label>
                            <label htmlFor="">Password
                                <input type="password" value={this.state.password} onChange={this.update('password')} />
                            </label>
                            <input type="submit" value='Signup' />
                        </form>
                    </header>
                    <Link to='/login'>Log In</Link>
                </div>
            )
        )
    }
}

export default SessionForm;
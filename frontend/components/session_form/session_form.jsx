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
                
                <div className='form-container'>
                  
                    <header className='form-header'>Log In</header>
                    <br/>
                        {this.renderErrors()}
                        <form action=""onSubmit={this.handleSubmit}>
                            <label htmlFor="">
                                <input type="text" value={this.state.username} placeholder="Username" onChange={this.update("username")}/>
                            </label>
                            <br/>
                            <label htmlFor="">
                                <input type="password" value={this.state.password} placeholder='Password' onChange={this.update('password')}/>
                            </label>
                            <br/>
                            <input type="submit" value='Sign In' className='form-btn'/>
                        </form>
                        <br/>
                    <Link to='/signup' className='form-link'>Sign up now.</Link>
                </div>
            ) : (
                <div className='form-container'>
                    <div className='signup-background'></div>
                    <header className='form-header'>Sign Up</header>
                    <br/>
                    {this.renderErrors()}
                    <form action="" onSubmit={this.handleSubmit}>
                        <label htmlFor="">
                            <input type="text" value={this.state.username} placeholder="Username" onChange={this.update("username")} />
                        </label>
                        <br/>
                        <label htmlFor="">
                            <input type="password" value={this.state.password} placeholder='Password' onChange={this.update('password')} />
                        </label>
                        <br/>
                        <input type="submit" value='Signup' className='form-btn' />
                    </form>
                    <br/>
                    <Link to='/login' className='form-link'>Log in now.</Link>
                </div>
            )
        )
    }
}

export default SessionForm;
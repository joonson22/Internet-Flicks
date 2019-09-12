import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props){
        super(props),
    this.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
        
    }

    componentDidMount(){
        this.props.clearErrors();
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

    demoLogin(){
        let username = 'Cutie'.split('')
        let password = '123456'.split('')
        
        for(let i = 0; i < username.length; i++) {
            setTimeout(() => {
                this.setState({username: this.state.username += username.shift()})
            }, 700)
        }

        for (let j = 0; j < password.length; j++) {
            setTimeout(() => {
                this.setState({password: this.state.password += password.shift()})
            }, 1200)
        }
        

        // this.setState({username: 'Cutie', password: '123456'})
       
        
    }

    // recursiveCall(username, password) {
    //     if (username.length === 0) return ''
    //     if (password.length === 0) return ''

    //     setTimeout(() => {
    //         this.setState({ username: this.state.username += username.shift() })
    //     }, 500)
    //     setTimeout(() => {
    //         this.setState({ password: this.state.password += password.shift() })
    //     }, 500)
    // }
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => {
                    return <li>{error}</li>
                })}

            </ul>

        )
    }
    render(){
        return(
            this.props.formType === 'login' ? (
                <div className='form-container'>
                    <div className='background-login'></div>
                    <div className='form'>
                        <header className='form-header-login'>Sign In</header>
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
                                <button className='demo-btn' onClick={this.demoLogin}>Demo Login</button>
                            <br/>
                        <Link to='/signup' className='form-link'>Sign up now.</Link>
                    </div>
                </div>
            ) : (
                <div className='form-container'>
                    <div className='form'>
                    <div className='background-signup'></div>
                        <header className='form-header'>Sign Up</header>
                        <br/>
                         <li className='signup-error'>{this.renderErrors()} </li>
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
                </div>
            )
        )
    }
}

export default SessionForm;
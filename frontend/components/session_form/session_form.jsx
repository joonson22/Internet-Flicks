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
        e.preventDefault();
        
        let user = Object.assign({}, this.state)
        this.props.processForm(user).then(() => {
                this.props.history.push('/movies')
            }
        )
    }

    demoLogin(e){
        e.preventDefault();
        this.setState({
            username: '',
            password: ''
        })
        this.setUsername()
    }

    setUsername(demoname) {
        demoname = demoname || 'DemoUser'.split('')
        setTimeout(() => {
            this.setState({
                username: this.state.username += demoname.shift()
            })
            return demoname.length === 0 ? this.setPassword() : this.setUsername(demoname)
        }, 50)
       

    }

    setPassword(demopassword) {
    
        demopassword = demopassword || '123456'.split('')

        setTimeout(() => {
            this.setState({
                password: this.state.password += demopassword.shift()
            })
            return demopassword.length === 0 ? this.props.processForm(this.state).then(() => {
                this.props.history.push('/movies')
            })  : this.setPassword(demopassword)
        }, 50)

       
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => {
                    return <li key={i}>{error}</li>
                })}

            </ul>

        )
    }
    render(){
        let userError;
        let passwordError;

        this.props.errors.map(error => {
            if (error.includes("Username")) {
                userError = error;
            } else {
                passwordError = error;
            }
        })

        return(
            this.props.formType === 'login' ? (
                <div className='form-container'>
                    <div className='background-login'></div>
                    <div className='form'>
                        <header className='form-header-login'>Sign In</header>
                        <br/>
                        <div className='login-errors'>
                            {this.renderErrors()}
                        </div>
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
                        <form action="" onSubmit={this.handleSubmit}>
                            <label htmlFor="">
                                <input type="text" value={this.state.username} placeholder="Username" onChange={this.update("username")} />
                            </label>
                                <div className='login-errors'>
                                    <li id='signup-error'>{userError}</li> 
                                </div>
                            <br/>
                            <label htmlFor="">
                                <input type="password" value={this.state.password} placeholder='Password' onChange={this.update('password')} />
                            </label>
                            <div >
                                <li id='signup-error'>{passwordError}</li>
                            </div>
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
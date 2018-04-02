import React, { Component } from 'react'
import styled from 'styled-components'


const Styled = styled.div`
    display: flex;
    justify-content: space-around;

    .signUpContainer {
        border-style: solid;
        padding: 20px;
        margin: 20px;
    }

    .loginContainer {
        border-style: solid;
        padding: 20px;
        margin: 20px;
    }
`

class SignUpLogIn extends Component {

    state = {
        signUp: {
            email: '',
            password: '',
            password_confirmation: ''
        },

        login: {
            email: '',
            password: ''
        }

    }

    
    componentWillMount() {
        alert("Login with: luffyfan99@yahoo.com/abc12345. Or sign up with your own email. Thank you")
    }
    

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.signUp.email,
            this.state.signUp.password,
            this.state.signUp.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.login.email,
            this.state.login.password
        )

    }

    handleSignUp = (event) => {
        const attribute = event.target.name
        const newSignUp = { ...this.state.signUp }
        newSignUp[attribute] = event.target.value
        this.setState({ signUp: newSignUp })
        alert("Check your email for authorization")
    }

    handleLogIn = (event) => {
        const attribute = event.target.name
        const newLogin = { ...this.state.login }
        newLogin[attribute] = event.target.value
        this.setState({ login: newLogin })
    }

    render() {
        return (
            <Styled>
                <div className="loginContainer">
                    <h2>Log In</h2>
                    <form className="logInForm">
                        <div>
                            <input onChange={this.handleLogIn} placeholder="Email" type="text" name="email" value={this.state.login.email} />
                        </div>
                        <div>
                            <input onChange={this.handleLogIn} placeholder="Password" type="password" name="password" value={this.state.login.password} />
                        </div>
                        <button onClick={this.signIn}>Log In</button>
                    </form>
                </div>


                <div className="signUpContainer">
                    <h2>Sign Up</h2>
                    <form className="signUpForm">
                        <div>
                            <input onChange={this.handleSignUp} placeholder="Email" type="text" name="email" value={this.state.signUp.email} />
                        </div>
                        <div>
                            <input onChange={this.handleSignUp} placeholder="Password" type="password" name="password" value={this.state.signUp.password} />
                        </div>
                        <div>
                            <input onChange={this.handleSignUp} type="password" placeholder="Confirm Password" name="password_confirmation"
                                value={this.state.signUp.password_confirmation} />
                        </div>
                        <button onClick={this.signUp}>Sign Up</button>
                    </form>
                </div>
            </Styled>
        )
    }
}

export default SignUpLogIn
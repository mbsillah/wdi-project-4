import React, { Component } from 'react'

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
    }

    handleLogIn = (event) => {
        const attribute = event.target.name
        const newLogin = { ...this.state.login }
        newLogin[attribute] = event.target.value
        this.setState({ login: newLogin })
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleSignUp} type="text" name="email" value={this.state.signUp.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleSignUp} type="password" name="password" value={this.state.signUp.password} />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <input onChange={this.handleSignUp} type="password" name="password_confirmation"
                            value={this.state.signUp.password_confirmation} />
                    </div>
                    <button onClick={this.signUp}>Sign Up</button>
                </form>

                <br />
                <br />

                <h1>Or</h1>

                <br />
                <br />
                <h2>Log In</h2>
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleLogIn} type="text" name="email" value={this.state.login.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleLogIn} type="password" name="password" value={this.state.login.password} />
                    </div>
                    <button onClick={this.signIn}>Log In</button>
                </form>
            </div>
        )
    }
}

export default SignUpLogIn
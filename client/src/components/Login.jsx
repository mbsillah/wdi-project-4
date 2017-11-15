import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends Component {

    state = {
        users: []
    }

    async componentWillMount() {
        try {
            const res = await axios.get("/api/user")
            this.setState({ users: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                All users:
                {this.state.users.map((user) => {
                    return <Link onClick={() => this.props.changeLogInState(user)} to="/">{user.username}</Link>
                })}
            </div>
        );
    }
}

export default Login;
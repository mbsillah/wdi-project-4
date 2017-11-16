import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const NavStyle = styled.div`
padding: 15px;
`


class NavBar extends Component {

    state = {
        search: ""
    }



    handleChange = (event) => {
        this.setState({ search: event.target.value })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push(`/search/${this.state.search}`)
    }

    logOut = async (event) => {
        
        try {
            await axios.delete('/auth/sign_out')
            localStorage.clear()
            this.props.signOut()
        } catch (error) {
            console.log(error)
        }
    }

renderUserMessage() {
    if (this.props.userLoggedIn) {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to={`/user/${this.props.currentUser.id}`}>Your Page/Playlists</Link>
                <button onClick={() => this.logOut()}>Sign Out</button>
                <form onSubmit={this.handleSubmit}>
                    <span>Search Albums/Products: <input type="search" onChange={this.handleChange} /></span>
                    <button>Search</button>
                </form>
            </div>
        );
    } else {
        return null
    }
}

render() {
    return (
        <NavStyle>
            <div>
                {this.renderUserMessage()}
            </div>
        </NavStyle>
    );
}
}

export default withRouter(NavBar);
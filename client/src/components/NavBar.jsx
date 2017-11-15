import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

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



    render() {
        return (
            <NavStyle>
            <div>
            <Link to="/">Home</Link>
            {this.props.userLoggedIn ? <Link to={`/user/${this.props.currentUser.id}`}>Your Page/Playlists</Link> : <Link to="/login" >Log In</Link>}
                <form onSubmit={this.handleSubmit}>
                    <span>Search Albums/Products: <input type="search" onChange={this.handleChange} /></span>
                    <button>Search</button>
                </form>
            </div>
            </NavStyle>
        );
    }
}

export default withRouter(NavBar);
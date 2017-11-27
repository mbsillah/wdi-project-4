import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const NavStyle = styled.div`
background-color: #111820;
padding: 15px;
`

const NavItem = styled.div`
display: flex;
justify-content: space-around;
button {
    border: none;
    background-color: #111820;
    color: white;
    font-size: 17px;
    text-decoration: none; 
    padding: 10px;
    :hover {
        color: #6b7784
    }
}


span {
    text-size: 17px;
}
`
const NavTitle = styled.div`
display: flex;
justify-content: center;
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
                <NavItem>
                    <Link to="/"><button>Home</button></Link>
                    <Link to={`/user/${this.props.currentUser.id}`}><button>Your Page/Playlists</button></Link>
                    <button onClick={() => this.logOut()}>Sign Out</button>
                    <form onSubmit={this.handleSubmit}>
                        <span>Search Albums/Products: <input type="search" onChange={this.handleChange} /></span>
                        <button>Search</button>
                    </form>
                </NavItem>
            );
        } else {
            return (
                <NavTitle>
                <h2>Welcome To Nerdify!</h2>
                </NavTitle>
            )
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
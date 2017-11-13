import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled.div`
padding: 15px;
`


class NavBar extends Component {

    state = {
        search: "",
        redirectToSearchPage: false,
        key: ''
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
                <form onSubmit={this.handleSubmit}>
                    <span>Search Albums/Products: <input type="search" onChange={this.handleChange} /></span>
                    <button>Search</button>
                </form>
            </NavStyle>
        );
    }
}

export default withRouter(NavBar);
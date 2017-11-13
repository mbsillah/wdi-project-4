import React, { Component } from 'react';

class NavBar extends Component {

    state = {
        search: ""
    }

    render() {
        return (
            <div>
                <form>
                    <span>Search Albums/Products:</span><input type="search" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default NavBar;
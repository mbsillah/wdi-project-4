import React, { Component } from 'react';
import axios from 'axios';
import Playlist from './Playlist'

class UserPage extends Component {

    state = {
        playlists: []
    }

    async componentWillMount() {
        try {
            const { userId } = this.props.currentUser.id
            const res = await axios.get(`/api/user/${userId}/playlist`)
            this.setState({ playlists: res.data})
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.currentUser.username}'s Page</h1>
                <Playlist />
            </div>
        );
    }
}

export default UserPage;
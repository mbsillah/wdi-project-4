import React, { Component } from 'react';
import axios from 'axios'

class NewPlaylist extends Component {

    state = {
        playlist: {
            name: ''
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const newPlaylist = { ...this.state.playlist }
        newPlaylist[attribute] = event.target.value
        this.setState({ playlist: newPlaylist })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post(`/api/users/${this.props.currentUser.id}/playlists`, {
            'playlist': this.state.playlist
        })
        console.log(res)

    }

    render() {
        return (
            <div>
                <label htmlFor="username">Playlist Name: </label>
                <input onChange={this.handleChange} type="text" name="name" />
                <button onClick={this.handleSubmit}>Add Playlist</button>
            </div>
        );
    }
}

export default NewPlaylist;
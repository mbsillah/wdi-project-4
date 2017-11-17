import React, { Component } from 'react';
import axios from 'axios'
import NewPlaylist from './NewPlaylist'

class UserEdit extends Component {

    state = {
        user: {
            username: '',
            email: ''
        }
    }

    async componentWillMount() {
        const userId = this.props.currentUser.id
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const newUser = { ...this.state.user }
        newUser[attribute] = event.target.value
        this.setState({ user: newUser })
    }

    handleSubmit = async (event) => {
        const res = await axios.patch(`/api/users/${this.props.currentUser.id}/`, {
            'user': this.state.user
        })
        console.log(res)
    }

    render() {
        return (
            <div>
                <h1>Edit User</h1>
                <label>Select your current playlist (All added songs will be put into here): </label>
                <select value={this.props.currentPlaylist} onChange={(event) => this.props.setCurrentPlaylist(event.target.value)}>
                    <option>-Choose Playlist-</option>
                    {this.props.playlists.map((playlist, index) => {
                        return <option key={index} value={playlist.id} >{playlist.name}</option>
                    })}
                </select>

                <h2>Edit Username</h2>

                <form>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input onChange={this.handleChange} type="text" name="username" value={this.state.user.username} />
                        <button onClick={this.handleSubmit}>Change</button>
                        <h4>Add A New Playlist</h4>
                        <NewPlaylist currentUser={this.props.currentUser}/>
                    </div>
                </form>

            </div>
        );
    }
}

export default UserEdit;
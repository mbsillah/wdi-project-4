import React, { Component } from 'react';
import axios from 'axios'
import Tracks from './Tracks'

class Playlist extends Component {

    state = {
        selectedPlaylist: [],
        tracks: []
    }

    componentDidUpdate() {

    }

    getTracks = async (playlistid) => {
        try {
            const res = await axios.get(`/api/user/${this.props.currentUser.id}/playlist/${playlistid}/track`)
            this.setState({ tracks: res.data })
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <div>
                <div>
                    <label>Select your playlist: </label>
                    <select onChange={(event) => this.getTracks(event.target.value)}>
                        <option>-Choose Playlist-</option>
                        {this.props.playlists.map((playlist) => {
                            return <option value={playlist.id} >{playlist.name}</option>
                        })}
                    </select>
                    <Tracks tracks={this.state.tracks} />
                </div>
            </div>
        );
    }
}

export default Playlist;
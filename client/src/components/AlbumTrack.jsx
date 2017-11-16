import React, { Component } from 'react';
import axios from 'axios'

class AlbumTrack extends Component {

    state = {
        title: '',
        album: '',
        total_playtime: '',
        release_year: ''
    }

    componentWillMount() {
        this.setState({
            title: this.props.track.names.English || this.props.track.names.Romaji,
            album: this.props.album.name,
            total_playtime: this.props.track.track_length,
            release_year: this.props.album.release_date
        })
    }

    addSongtoCurrentPlaylist = async (track) => {
        try {
            const userId = this.props.currentUser.id
            const playlistId = this.props.currentPlaylist
            const res = await axios.post(`/api/users/${userId}/playlists/${playlistId}/tracks`, {
                'track': this.state
            })
            alert(`Added ${this.state.title} your current playlist`)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.track.names.English || this.props.track.names.Romaji}{this.props.userLoggedIn ? <button onClick={() => this.addSongtoCurrentPlaylist(this.state)}>+</button> : null}</p>
            </div>
        );
    }
}

export default AlbumTrack;
import React, { Component } from 'react';
import axios from 'axios'
import Tracks from './Tracks'
import styled from 'styled-components'

const PlaylistStyle = styled.div`
    display: flex;
`

class Playlist extends Component {

    state = {
        tracks: []
    }


    getTracks = async (playlistid) => {
        try {
            const res = await axios.get(`/api/users/${this.props.currentUser.id}/playlists/${playlistid}/tracks`)
            this.setState({ tracks: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    deleteTrack = async (trackId, playlistId) => {
        try {
            const res = await axios.delete(`/api/users/${this.props.currentUser.id}/playlists/${playlistId}/tracks/${trackId}`)
            this.setState({ tracks: res.data })
        } catch (error) {
            console.log(error)
        }
    }



    render() {
        return (
            <PlaylistStyle>
                <div>
                    <label>Select your playlist: </label>
                    <select onChange={(event) => this.getTracks(event.target.value)}>
                        <option>-Choose Playlist-</option>
                        {this.props.playlists.map((playlist, index) => {
                            return <option key={index} value={playlist.id} >{playlist.name}</option>
                        })}
                    </select>
                    <Tracks tracks={this.state.tracks} deleteTrack={this.deleteTrack} />
                </div>
            </PlaylistStyle>
        );
    }
}

export default Playlist;
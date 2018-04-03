import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import AlbumTrack from './AlbumTrack'

const Style = styled.div`
img {
    margin: 20px 20px 50px 20px;    
    float:left;
    border-style: solid;
    border-color: black;

}

.trackContainer {
    padding-left: 10px
}
`

class Album extends Component {

    state = {
        album: [],
        discs: [],
        loading: true,
    }

    async componentDidMount() {
        try {
            const { albumId } = this.props.match.params
            const res = await axios.get(`https://vgmdb.info/album/${albumId}`)
            this.setState({ album: res.data, discs: res.data.discs, loading: false })
        } catch (error) {
            console.log(error)
        }
    }

    saveSong = (track) => {

    }

    render() {

        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        return (
            <Style>
                <h2>{this.state.album.name}</h2>
                <img src={this.state.album.picture_full} alt={this.state.album.name} />
                <div>
                    <h4>Release Date: </h4><p>{this.state.album.release_date}</p>
                    <h4>Composers: </h4>
                    {this.state.album.composers.map((artist, index) => {
                        return <p key={index}>{artist.names.en}</p>
                    })}
                </div>
                <br />
                <br />
                <p>To listen to each track, just click on the name, and the link will open in a new tab. <br/>
                If you like said track hit the "+" button to add it to your current playlist.
                </p>
                <br />
                <br />
                <div className="trackContainer">
                    <h4>Tracks: </h4>
                    {this.state.discs.map((disc, index) => {
                        return disc.tracks.map((track, index) => {
                            return (
                                <div key={index}>
                                    <AlbumTrack track={track}
                                        album={this.state.album}
                                        currentUser={this.props.currentUser}
                                        currentPlaylist={this.props.currentPlaylist}
                                        userLoggedIn={this.props.userLoggedIn}
                                    />

                                </div>

                            )

                        })

                    })}
                </div>
            </Style>
        );
    }
}

export default Album;
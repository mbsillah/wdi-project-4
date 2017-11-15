import React, { Component } from 'react';
import axios from 'axios'

class Album extends Component {

    state = {
        album: [],
        discs: [],
        loading: true
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

    render() {

        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <h2>{this.state.album.name}</h2>
                <img src={this.state.album.picture_full} alt={this.state.album.name} />
                {this.state.discs.map((disc, index) => {
                    return disc.tracks.map((track) => {
                        return (
                            <div>
                            <p>{track.names.English}</p>
                            </div>
                        )
                    })
                })}
            </div>
        );
    }
}

export default Album;
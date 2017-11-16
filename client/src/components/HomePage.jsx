import React, { Component } from 'react';
import axios from 'axios'
import RandomAlbums from './RandomAlbums'

class HomePage extends Component {

    state = {
        albums: [],
        loading: true
    }

    async componentDidMount() {
        var updatedHomeAlbums = []
        try {
            const res1 = await axios.get(`https://vgmdb.info/album/21096`)
            updatedHomeAlbums.push(res1.data)
            const res2 = await axios.get(`https://vgmdb.info/album/56366`)
            updatedHomeAlbums.push(res2.data)
            const res3 = await axios.get(`https://vgmdb.info/album/12537`)
            updatedHomeAlbums.push(res3.data)
            const res4 = await axios.get(`https://vgmdb.info/album/2491`)
            updatedHomeAlbums.push(res4.data)
            const res5 = await axios.get(`https://vgmdb.info/album/16054`)
            updatedHomeAlbums.push(res5.data)
            const res6 = await axios.get(`https://vgmdb.info/album/4593`)
            updatedHomeAlbums.push(res6.data)
            this.setState({ albums: updatedHomeAlbums, loading: false })
        } catch (error) {
            console.log(error)
        }
    }



    render() {
        return (
            <div>
                <h1>Welcome to Nerdify</h1>
                <RandomAlbums albums={this.state.albums} loading={this.state.loading} />
            </div>
        );
    }
}

export default HomePage;


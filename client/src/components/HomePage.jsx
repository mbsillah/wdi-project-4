import React, { Component } from 'react';
import axios from 'axios'
import RandomAlbums from './RandomAlbums'
import styled from 'styled-components'

const AlbumStyle = styled.div`
text-align: center;
font-family: 'Fugaz One', cursive;

`


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
            <AlbumStyle>
                <h1 className="title">Welcome to Nerdify</h1>
                <h3>- Powered by Youtube & VGMDB -</h3>
                <h4>Top Albums of the Week: </h4>
                <RandomAlbums albums={this.state.albums} loading={this.state.loading} />
            </AlbumStyle>
        );
    }
}

export default HomePage;


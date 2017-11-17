import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Soundtracks = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
img {
    border-style: solid;
    border-color: black;
    margin: 10px;
}
`

const RandomAlbums = (props) => {
    if (props.loading) {
        return <h1>Loading...</h1>
    }
    return (
        <Soundtracks>
            {props.albums.map((album, index) => {
                return (
                    <Link key={index} to={`/${album.link}`}>
                        <img src={album.picture_full} alt={album.name} />
                    </Link>
                )
            }
            )}
        </Soundtracks>
    );
};

export default RandomAlbums;
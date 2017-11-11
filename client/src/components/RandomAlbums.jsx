import React from 'react';
import styled from 'styled-components'

const Soundtracks = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

const RandomAlbums = (props) => {
    if (props.loading) {
        return <h1>Loading...</h1>
    }
    return (
        <Soundtracks>
           {props.albums.map((album) => {
               return (
                   <img src={album.picture_full} alt={album.name}/>
               )
           }
        )}
        </Soundtracks>
    );
};

export default RandomAlbums;
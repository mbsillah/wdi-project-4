import React from 'react';

const RandomAlbums = (props) => {
    if (props.loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
           {props.albums.map((album) => {
               return (
                   <img key={album.id} src={album.picture_full} alt={album.name}/>
               )
           }
        )}
        </div>
    );
};

export default RandomAlbums;
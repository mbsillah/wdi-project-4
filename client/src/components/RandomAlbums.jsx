import React from 'react';

const RandomAlbums = (props) => {
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
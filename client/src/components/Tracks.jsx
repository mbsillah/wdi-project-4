import React from 'react';
import Youtube from './Youtube'

const Tracks = (props) => {
    return (
        <div>
            {props.tracks.map((track, index) => {
                return (
                    <div key={index}>
                        <h3>{track.title}<button onClick={() => props.deleteTrack(track.id, track.playlist_id)}> X </button></h3>
                        <p>{track.album}</p>
                        <p>{track.release_year}</p>
                        <Youtube track={track}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Tracks;


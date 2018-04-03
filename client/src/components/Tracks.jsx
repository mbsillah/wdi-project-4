import React from 'react';
import Youtube from './Youtube'
import styled from 'styled-components'

const TrackStyle = styled.div`
    display: flex;
    justify-content: space-around;
`

const Tracks = (props) => {
    return (
        <TrackStyle>
            {props.tracks.map((track, index) => {
                return (
                    <div key={index}>
                        <h3>{track.title}<button onClick={() => props.deleteTrack(track.id, track.playlist_id)}> X </button></h3>
                        <p>{track.album}</p>
                        <p>{track.release_year}</p>
                        <Youtube track={track} />
                    </div>
                )
            })}
        </TrackStyle>
    );
};

export default Tracks;


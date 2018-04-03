import React from 'react';
import Youtube from './Youtube'
import styled from 'styled-components'

const TrackStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
`

const IndividualTrack = styled.div`
    margin: 0px 30px;
`

const Tracks = (props) => {
    return (
        <TrackStyle>
            {props.tracks.map((track, index) => {
                return (
                    <IndividualTrack key={index}>
                        <h3>{track.title}<button onClick={() => props.deleteTrack(track.id, track.playlist_id)}> X </button></h3>
                        <p>{track.album}</p>
                        <p>{track.release_year}</p>
                        <Youtube track={track} />
                    </IndividualTrack>
                )
            })}
        </TrackStyle>
    );
};

export default Tracks;


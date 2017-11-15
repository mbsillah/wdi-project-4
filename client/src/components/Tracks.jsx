import React from 'react';

const Tracks = (props) => {
    return (
        <div>
            {props.tracks.map((track) => {
                return (
                    <div>
                        <p>{track.title}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Tracks;


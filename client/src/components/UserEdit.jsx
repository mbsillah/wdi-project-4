import React from 'react';

const UserEdit = (props) => {
    return (
        <div>
            <h1>Edit User</h1>
            <label>Select your current playlist (All added songs will be put into here): </label>
            <select value={props.currentPlaylist} onChange={(event) => props.setCurrentPlaylist(event.target.value)}>
                <option>-Choose Playlist-</option>
                {props.playlists.map((playlist, index) => {
                    return <option key={index} value={playlist.id} >{playlist.name}</option>
                })}
            </select>
        </div>
    );
};

export default UserEdit;



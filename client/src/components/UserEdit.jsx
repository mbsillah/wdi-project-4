import React from 'react';

const UserEdit = (props) => {
    return (
        <div>
            <h1>Edit User</h1>
            <label>Select your current playlist (All added songs will be put into here): </label>
            <select onChange={(event) => props.setCurrentPlaylist(event.target.value)}>
                <option>-Choose Playlist-</option>
                {props.playlists.map((playlist) => {
                    return <option value={playlist.id} >{playlist.name}</option>
                })}
            </select>
        </div>
    );
};

export default UserEdit;



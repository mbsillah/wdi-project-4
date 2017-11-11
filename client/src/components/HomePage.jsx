import React from 'react';
import RandomAlbums from './RandomAlbums'
import NavBar from './NavBar'

const HomePage = (props) => {
    return (
        <div>
            <NavBar />
            <h1>Welcome to Nerdify</h1>
            <RandomAlbums albums={props.albums} loading={props.loading}/>
        </div>
    );
};

export default HomePage;
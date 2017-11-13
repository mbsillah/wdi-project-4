import React from 'react';
import RandomAlbums from './RandomAlbums'


const HomePage = (props) => {
    return (
        <div>
            
            <h1>Welcome to Nerdify</h1>
            <RandomAlbums albums={props.albums} loading={props.loading}/>
        </div>
    );
};

export default HomePage;
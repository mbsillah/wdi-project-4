import React, { Component } from 'react';
import axios from 'axios'

class YoutubeLink extends Component {

    state = {
        youtubeId:''
    }

    async componentWillMount() {
        try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_SECRET}&part=snippet&q=${this.props.track.names.English || this.props.track.names["English (Official)"]}%20${this.props.album.name}&maxResults=1`)
        console.log(res)
        this.setState({ youtubeId: res.data.items[0].id.videoId })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <a href={`https://www.youtube.com/watch?v=${this.state.youtubeId}`}>{this.props.track.names.English || this.props.track.names["English (Official)"]}</a>
            </div>
        );
    }
}




export default YoutubeLink;
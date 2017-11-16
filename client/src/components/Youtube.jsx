import React, { Component } from 'react';
import axios from 'axios'

//process.env.REACT_APP_SECRET

class Youtube extends Component {

    state = {
        youtubeId: ""
    }

    async componentWillMount() {
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_SECRET}&part=snippet&q=${this.props.track.title}%20${this.props.track.album}&maxResults=1`)
            this.setState({youtubeId: res.data.items[0].id.videoId})
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.track.title !== this.props.track.title) {
            try {
                const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_SECRET}&part=snippet&q=${this.props.track.title}%20${this.props.track.album}&maxResults=1`)
                this.setState({youtubeId: res.data.items[0].id.videoId})
            } catch (error) {
                console.log(error)
            }
        }
    }

    render() {
        return (
            <div>
                <iframe
                    title={this.props.track.title} 
                    width="560" height="315"
                    src={`https://www.youtube.com/embed/${this.state.youtubeId}?rel=0`}
                    frameBorder="0"
                    allowFullScreen></iframe>
            </div>
        );
    }
}

export default Youtube;
import React, { Component } from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        
    }
    
    render() {
        if (!this.props.video) {
            return (<p>Loading...</p>)
        }
        const video = this.props.video;
        const videoId = video.id.videoId;
        const url = '//youtube.com/embed/' + videoId;
        return (
            <div className="video-details col-md-8">
                <iframe className="" src={url} />
                <h1>{video.snippet.title}</h1>
            </div>
        );
    }
}

export default VideoDetail;
import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const video = this.props.video;
        const videoData = video.snippet;
        const onVideoSelect = this.props.onVideoSelect;
        return (
            <li onClick={() => onVideoSelect(video)}>
                <a href="#{videoData.id.videoId}">
                    <img src={videoData.thumbnails.default.url} />
                    <h3>{videoData.title}</h3>
                </a>
            </li>);
    }
}

export default VideoListItem;
import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    
    onVideoSelect(video) {
        
    }
    
    render() {
         const VideoItems = this.props.videos.map((video, no) => {
            return <VideoListItem 
                        key={video.etag}
                        onVideoSelect={this.props.onVideoSelect} 
                        video={video} 
                   />
        });
        return (<ul className="col-md-r list-group">
            {VideoItems}
        </ul>);
    }
}

export default VideoList;
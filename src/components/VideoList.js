import React from 'react';
import VideoListItem from './VideoListItem';


const VideoList = (props) => {

  const videoListItems = props.videos.map(video => {
    return (
      <VideoListItem
        videoSelect={props.videoSelect}  
        video={video} 
        key={video.etag}/>
    )
  })

  return (
    <ul className="col-md-4 list-group playlist">
     {videoListItems}  
    </ul>
  )
};

export default VideoList;
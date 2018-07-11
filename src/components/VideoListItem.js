import React from 'react';

const VideoListItem = ({ video, videoSelect}) => {
  
  const imageUrl = video.snippet.thumbnails.default.url;
  const style = {
    display: "flex",
    cursor: "pointer"
  }
  
  return (
    <li onClick={() => videoSelect(video)} className="list-group-item" style={style}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} className="media-object" alt={video.snippet.title}/>
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">
          {video.snippet.title}
        </div>
      </div>
     
    </li> 
)}

export default VideoListItem;
// Here's a functional component. Function components don't worry about state. They just render stuff
// Less expensive than a class component
// functional components use props instead of this.props
// The key value lets react identify items in the list. If it knows a key, it'll only update that specific element instead of re-rendering everything
import React from 'react';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <li key={ video.etag }>{video.snippet.title}</li>
    )
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList;
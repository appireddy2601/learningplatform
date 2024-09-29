import React from 'react';

const VideoPlayer = ({ match }) => {
  return (
    <div>
      <video width="800" height="450" controls>
        <source src={`https://your-cloudfront-url.com/${match.params.id}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

import React from 'react';
import ReactPlayer from 'react-player';

const VideoDisplay = ({url}) => (
    <ReactPlayer
      className='react-player'    
      playing={true}
      url={url}
      width='289px'
      height='207px'
      playing  
    />
  )

export default VideoDisplay; 
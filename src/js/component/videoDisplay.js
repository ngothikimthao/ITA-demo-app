import React from 'react';
import ReactPlayer from 'react-player';

const VideoDisplay = ({url}) => (
    <ReactPlayer
      className='react-player'    
      playing={true}
      url={url}
      width='100%'
      height='100%'
      playing  
    />
  )

export default VideoDisplay; 
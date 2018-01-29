import React from 'react';
import VideoComponent from '../Video'

export const VideosComponent = (props) => {
  
  if (props.loading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      {props.videos &&
        <ul>
          {props.videos.map((video, index) => {
            return <VideoComponent {...video} key={index} />
          })}
        </ul>
      }
    </div>
  )
}

export default VideosComponent

import React from 'react';
import VideoComponent from '../Video'

export const VideosComponent = (props) => {
  console.log(props.videos)
  return (
    <div>
      {props.videos &&
        <ul>
          {props.videos.map((video, index) => {
            return <VideoComponent data={video} key={index} />
          })}
        </ul>
      }
    </div>
  )
}

export default VideosComponent

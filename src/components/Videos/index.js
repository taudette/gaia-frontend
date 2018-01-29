import React from 'react';
import VideoComponent from '../Video'
import styles from '../../styles/components/_videos.scss';

export const VideosComponent = (props) => {
  if (props.loading) {
    return <p>Loading...</p>
  }

  return (
    <div >
      {props.videos &&
        <ul className={styles.videoList}>
          {props.videos.map((video, index) => {
            return <VideoComponent {...video} key={index} />
          })}
        </ul>
      }
    </div>
  )
}

export default VideosComponent

import React from 'react';
import styles from '../../styles/components/_video.scss'

export const VideoComponent = (props) => {
  console.log(props)
  return (
      <div>
        {/* only render video if image and title are avaiable, check the rest individually */}
        { props.img && props.title && 
          <div className={styles.tileContainer}>
            <img src={props.img} alt="video-image" /> 
            <p className="">{props.title}</p> 
            { props.segment && <p>segment: {props.segment}</p> }
            { props.likes && <p>likes: {props.likes}</p> }
            { props.dislikes && <p>dislikes: {props.dislikes}</p> }
            { props.seasons && <p>seasons: {props.seasons} </p> } 
            { props.episodes && <p>episodes: {props.episodes} </p> } 
          </div>
        }
      </div>
      
  )
}

export default VideoComponent

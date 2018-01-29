import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../styles/components/_video.scss';

export const VideoComponent = (props) => {
  return (
    <Col lg={3} md={4} sm={6} xs={12} key={props.index}>
      <li className={styles.tile}>
        {/* only render video if image and title are avaiable, check the rest individually */}
        { props.img && props.title &&
          <div className={styles.tileContainer}>
            <img src={props.img} alt="video-image" />         
              <Row>
                <Col xs={5}>
                  { props.segment && <a href="javascript:void(0);" className={styles.segment}>{props.segment}</a> }
                </Col>
                <Col xs={7} className="text-right">
                  { props.likes && <a href="javascript:void(0);">likes: {props.likes} </a> }
                  { props.dislikes && <a href="javascript:void(0);">dislikes: {props.dislikes}</a> }
                </Col>
              </Row>
              <div className={styles.textContainer}>    
              <Row>
                <a href="javascript:void(0);" className={styles.title}>{props.title}</a>
              </Row>
              <Row>
                { props.seasons && <a href="javascript:void(0);" className={styles.pl}>{props.seasons} seasons, </a>} 
                { props.episodes && <a href="javascript:void(0);">{props.episodes} episodes </a> }
              </Row>
            </div>
          </div>
        }
      </li>
    </Col>

  )
}

export default VideoComponent

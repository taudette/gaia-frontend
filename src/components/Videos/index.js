import React from 'react';
import VideoComponent from '../Video';
import { DropdownButton, MenuItem, Row, Col } from 'react-bootstrap';
import styles from '../../styles/components/_videos.scss';

export const VideosComponent = (props) => {
  if (props.loading) {
    return <p>Loading...</p>
  }

  return (
    <section >
      <div className={styles.videoList} >
        <Row>
          <Col lg={3} lgOffset={9} md={4} mdOffset={8} sm={6} smOffset={6} xs={12} key={props.index} className={`${styles.buttonCol} hidden-xs`}>
            <p>SORT BY</p>
            <DropdownButton bsStyle='default' className={styles.dropDownButton} title='Choose an Option' id='sort videos'>
              <MenuItem eventKey="1">Name</MenuItem>
              <MenuItem eventKey="2">Date</MenuItem>
              <MenuItem eventKey="2">Category</MenuItem>
            </DropdownButton>
          </Col>
        </Row>
        <p>We suggest you start here &#x2192;</p>
        {props.videos &&
          <ul >
            {props.videos.map((video, index) => {
              return <VideoComponent {...video} key={index} />
            })}
          </ul>
        }
      </div>
    </section>
  )
}

export default VideosComponent

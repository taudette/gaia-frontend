import React from 'react';
import styles from '../../styles/components/_loadButtons.scss'
import { Row, Col } from 'react-bootstrap'

const LoadButtonsComponent = (props) => {
  return (
    <Row className={styles.buttonRow}>
      {/* don't show load more button if no more to load*/}
      { props.endIndex != props.listLength &&
        <Col smOffset={4} sm={4} xs={12} className="text-center">
          <button className={styles.loadButton} onClick={props.addVideos}>Load More</button>
        </Col>
      }
      <Col sm={4} xs={12} className="text-right">
        <button onClick={props.goToTop} className={styles.upButton}><i className={styles.arrow}></i></button>
      </Col>
    </Row>
  )
}

export default LoadButtonsComponent
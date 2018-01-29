import React from 'react';
import { connect } from 'react-redux';
import gaiaLogo from '../../../public/images/header-logo.svg';
import userLogo from '../../../public/images/user.png';
import styles from '../../styles/components/_header.scss';
import { Row, Col } from 'react-bootstrap';

export const HeaderContainer = (props) => (
  <section>
    <Row className={styles.row}>
      <Col xs={6}>
        <div className={styles.logoContainer}>
          <img src={gaiaLogo} alt="Gaia, Inc." />
        </div>
      </Col>
      <Col xs={6}>
        <div className={styles.userContainer}>
          <span><small>{props.user}</small></span>
          <img src={userLogo} alt="user logo" />
        </div>
      </Col>
    </Row>
  </section>
)

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(HeaderContainer)

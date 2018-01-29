import React from 'react';
import { connect } from 'react-redux';
import gaiaLogo from '../../../public/images/header-logo.svg'
import userLogo from '../../../public/images/user.png'
import styles from '../../styles/components/_header.scss'

export const HeaderContainer = (props) => (
  <div className={styles.logoContainer}>
    <img src={gaiaLogo} alt="Gaia, Inc." />
    <p>{props.user}</p>
    <img src={userLogo} alt="user logo" />
  </div>
)

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, null)(HeaderContainer)

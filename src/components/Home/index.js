import React from 'react';
import styles from '../../styles/components/_home.scss';

export const Home = (props) => (
  <div className={styles.text}>
    {props.testData}
  </div>
)

export default Home

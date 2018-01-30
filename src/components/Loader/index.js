import React from 'react';
import loader from '../../styles/components/_loader.scss';

const LoaderComponent = () => (
  <div className={loader.loaderContainer}>
    <div className={loader.loader}></div>
  </div>
)

export default LoaderComponent
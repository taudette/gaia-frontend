import React from 'react';
import HeroContainer from '../Hero'
import VideosContainer from '../Videos/index';
import '../../styles/components/_home.scss'


export const Home = () => (
  <div>
    <HeroContainer />
    <VideosContainer />
  </div>
)

export default Home

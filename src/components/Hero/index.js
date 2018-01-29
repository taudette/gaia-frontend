import React from 'react';
import styles from '../../styles/components/_hero.scss'

const HeroComponent = (props) => {
  return (
    <div className="hero">
      <img src={props.hero.lgImage} alt="hero-image" />
      <h2 className="title">{props.hero.name}</h2>
      <p className="text">{props.hero.body}</p>
    </div>
  )
}

export default HeroComponent



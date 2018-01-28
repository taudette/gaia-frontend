import React from 'react';
import styles from '../../styles/components/_hero.scss'

const HeroComponent = (props) => {
  console.log(props)
  
  return (
    <div className="hero">
      <img srcSet={`${props.hero.smImage} 750w, ${props.hero.lgImage} 1125w,`} sizes="(max-width: 750px) 750px, 1125px" alt="hero-image" />
      <h2 className="title">{props.hero.name}</h2>
      <p className="text">{props.hero.body}</p>
    </div>
  )
}

export default HeroComponent

//need
//name, body, termImages.hero.

//lg hero_1125x414
//mobile:hero_750x276

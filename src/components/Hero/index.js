import React from 'react';
import styles from '../../styles/components/_hero.scss'

const HeroComponent = (props) => {
  return (
    <section >
      <div className={styles.heroContainer}>
        <img src={props.hero.lgImage} alt="hero-image" />
        <div className={styles.text}>
          <h2>{props.hero.name}</h2>
          <p className="hidden-xs"><small>{props.hero.body}</small></p>
        </div>
      </div>
    </section>
  )
}

export default HeroComponent



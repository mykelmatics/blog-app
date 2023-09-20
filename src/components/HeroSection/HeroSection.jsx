import React from 'react'
import Blogging from '../../assets/images/blogging.svg'
import style from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={style.hero_container}>
        <div className={style.image_container}>
          <img src={Blogging} alt="neoblog" className={style.hero_img} />
        </div>
        <h3 className={style.tagline}>
             Exploring the Latest Trends in <span className={style.hero_text}>Neoblog</span>
        </h3>

    </div>
  )
}

export default HeroSection
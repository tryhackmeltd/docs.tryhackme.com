import React from 'react'
import classNames from 'classnames'
import styles from './HeroTab.module.css'
import { TiArrowForwardOutline } from 'react-icons/ti'
import PropTypes from 'prop-types'

const HeroTabComponent = ({ text, image, url }) => {
  const handleClick = e => {
    e.preventDefault()
    window.location.href = url
  }

  return (
    <div
      className={classNames(styles.heroTabContainer)}
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleClick}>
      {text}
      <TiArrowForwardOutline size={40} className={classNames(styles.iconArrow)} />
    </div>
  )
}

HeroTabComponent.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default HeroTabComponent
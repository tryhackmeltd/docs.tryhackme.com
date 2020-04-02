import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Banner.module.css'

const BannerComponent = ({ text }) => {
  return (
    <div className={classNames(styles.bannerContainer, styles.dark)}>
      <div>
        {text}
      </div>
    </div>
  )
}

BannerComponent.defaultProps = {
  text: 'Banner Text'
}

BannerComponent.propTypes = {
  text: PropTypes.string.isRequired
}

export default BannerComponent

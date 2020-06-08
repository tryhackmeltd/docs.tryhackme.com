import React from 'react'
import HeroTabComponent from '../HeroTab/HeroTabComponent'
import classNames from 'classnames'
import styles from './SplitView.module.css'
import PropTypes from 'prop-types'

const SplitViewComponent = ({ items }) => {
  return (
    <div className={classNames(styles.splitViewContainer)}>
      {items && items.length && items.map((props, idx) => (
        <HeroTabComponent key={idx} {...props} />
      ))}
    </div>
  )
}

SplitViewComponent.defaultProps = {
  items: []
}

SplitViewComponent.propTypes = {
  items: PropTypes.array.isRequired
}

export default SplitViewComponent
/**
 * Copyright (c) 2018-present, TryHackMe, Ltd.
 * Categories component
 */
import React from 'react'
import classnames from 'classnames'
import styles from './Categories.module.css'
import PropTypes from 'prop-types'

const CategoriesComponent = ({ id, title, description, uri, handleClick }) => {
  return (
    <div className={classnames('col col--3 me-need-help-container-3d cta-nhc bg-nhc', styles.category)} onClick={e => handleClick(e, uri)}>
      <h2>{id}. {title}</h2>
      <p>
        {description}
      </p>
    </div>
  )
}

CategoriesComponent.defaultProps = {
  id: 1,
  title: 'Default Title',
  description: 'Default Description',
  uri: '/default/uri',
  handleClick: /* istanbul ignore next*/ () => {}
}

CategoriesComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CategoriesComponent

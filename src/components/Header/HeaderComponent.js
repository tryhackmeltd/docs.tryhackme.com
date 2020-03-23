import React from 'react'
import Link from '@docusaurus/Link'
import classnames from 'classnames'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './Header.module.css'
import PropTypes from 'prop-types'

const HeaderComponent = ({ siteConfig, btnText, uri }) => {
  return (
    <header className={classnames('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{ siteConfig && siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig && siteConfig.tagline}</p>
      </div>
    </header>
  )
}

HeaderComponent.defaultProps = {
  siteConfig: {},
  btnText: 'Get Started',
  uri: '/'
}

HeaderComponent.propTypes = {
  siteConfig: PropTypes.object.isRequired,
  btnText: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired
}

export default HeaderComponent

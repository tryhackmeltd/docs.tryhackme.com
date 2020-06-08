import React from 'react'
import Link from '@docusaurus/Link'
import classNames from 'classnames'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './Header.module.css'
import PropTypes from 'prop-types'

const HeaderComponent = ({ siteConfig, btnText, uri }) => {
  return (
    <header className={classNames('hero hero--primary', styles.heroBanner)}>
      <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>{ siteConfig && siteConfig.title}</h1>
        <p className={styles.heroProjectSubtitle}>{siteConfig && siteConfig.tagline}</p>
      </div></div>
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

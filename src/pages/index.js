/**
 * Copyright (c) 2018-present, TryHackMe, Ltd.
 * Index (Home) page
 */
import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {
  CategoriesContainer,
  HeaderComponent,
  SplitViewComponent,
  BannerComponent
} from '../components'
import homepageCategories from '../../homepage-categories'

function Home() {
  const context = useDocusaurusContext()
  const {siteConfig = {}} = context
  const splitViewItems = [
    {
      text: 'Latest blog posts',
      image: 'https://blog.tryhackme.com/content/images/size/w1000/2020/02/TryHackMe_Red_Blue_borderless.png',
      url: 'https://blog.tryhackme.com'
    },
    {
      text: 'See Hackback 2',
      image: 'https://blog.tryhackme.com/content/images/size/w1000/2019/12/IMG_20191026_101233.jpg',
      url: 'https://tryhackme.com/hackback2'
    }]

  return (
    <Layout
      title={siteConfig.title}
      description="Official documentation site for TryHackMe">
      <HeaderComponent siteConfig={siteConfig} btnText='Get Started' uri='/docs/introduction/welcome' />
      <SplitViewComponent items={splitViewItems} />
      <BannerComponent text='Select a documentation category from the listings below.' />
      <main>
        <CategoriesContainer homepageCategories={homepageCategories} />
      </main>
    </Layout>
  )
}

export default Home

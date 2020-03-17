import React from 'react'
import { shallow, mount } from 'enzyme'
import SplitViewComponent from './SplitViewComponent'
import styles from './SplitView.module.css'

describe('SplitViewComponent', () => {
  it('successfully renders', () => {
    const wrapper = shallow(<SplitViewComponent />)
    expect(wrapper).not.toBeNull()
  })

  it('renders with items passed down through props', () => {
    const expectedProps = [
      {
        text: 'Latest blog posts',
        image: 'https://blog.tryhackme.com/content/images/size/w1000/2020/02/TryHackMe_Red_Blue_borderless.png',
        url: 'https://blog.tryhackme.com'
      },
      {
        text: 'See Hackback 2',
        image: 'https://blog.tryhackme.com/content/images/size/w1000/2019/12/IMG_20191026_101233.jpg',
        url: 'https://tryhackme.com/hackback2'
      }
    ]
    const wrapper = mount(<SplitViewComponent items={expectedProps} />)
    expect(wrapper.prop('items')).toEqual(expectedProps)
    wrapper.unmount()
  })

  it('renders the correct amount of HeroTabComponent instances', () => {
    const expectedProps = [
      {
        text: 'Latest blog posts',
        image: 'https://blog.tryhackme.com/content/images/size/w1000/2020/02/TryHackMe_Red_Blue_borderless.png',
        url: 'https://blog.tryhackme.com'
      },
      {
        text: 'See Hackback 2',
        image: 'https://blog.tryhackme.com/content/images/size/w1000/2019/12/IMG_20191026_101233.jpg',
        url: 'https://tryhackme.com/hackback2'
      }
    ]
    const wrapper = mount(<SplitViewComponent items={expectedProps} />)
    const splitViewContainer = wrapper.find(`.${styles.splitViewContainer}`)
    expect(splitViewContainer).toHaveLength(1)
    expect(splitViewContainer.find('HeroTabComponent')).toHaveLength(expectedProps.length)
    wrapper.unmount()
  })
})
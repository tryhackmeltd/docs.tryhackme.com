import React from 'react'
import { shallow, mount } from 'enzyme'
import HeroTabComponent from './HeroTabComponent'
import styles from './HeroTab.module.css'

describe('HeroTabComponent', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<HeroTabComponent text='test' url='testUrl' image='testImage' />)
    expect(wrapper).not.toBeNull()
  })

  it('renders with passed props', () => {
    const expectedProps = {
      text: 'My Text',
      url: 'someDummyUrl',
      image: 'someImageUrl'
    }
    const wrapper = mount(<HeroTabComponent text={'My Text'} url='someDummyUrl' image='someImageUrl' />)
    expect(wrapper.props()).toEqual(expectedProps)
    wrapper.unmount()
  })

  it('successfully redirects to the correct URL onClick', () => {
    const oldLocation = { location } = window
    delete window.location
    window.location = { href: jest.fn() }
    const wrapper = mount(<HeroTabComponent text={'My Text'} url='someDummyUrl' image='someImageUrl' />)
    wrapper.find(`.${styles.heroTabContainer}`).simulate('click')
    expect(window.location.href).toBe('someDummyUrl')
    window.location = oldLocation
    wrapper.unmount()
  })
})
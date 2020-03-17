import React from 'react'
import { shallow, mount } from 'enzyme'
import BannerComponent from './BannerComponent'

describe('BannerComponent', () => {
  it('renders successfully', () => {
    expect(shallow(<BannerComponent />)).not.toBeNull()
  })
  it('renders with the correct default props', () => {
    const expectedDefaultProps = { text: 'Banner Text' }
    const wrapper = mount(<BannerComponent />)
    expect(wrapper.props.text).not.toBeNull()
    expect(wrapper.props()).toEqual(expectedDefaultProps)
    wrapper.unmount()
  })

  it('renders with passed props', () => {
    const expectedProps = { text: 'Custom Prop' }
    const wrapper = mount(<BannerComponent text='Custom Prop' />)
    expect(wrapper.props().text).not.toBeNull()
    expect(wrapper.props()).toEqual(expectedProps)
    wrapper.unmount()
  })

  it('renders the correct text to the DOM', () => {
    const wrapper = shallow(<BannerComponent text='I am on the DOM' />)
    expect(wrapper.text().includes('I am on the DOM')).toBe(true)
  })
})
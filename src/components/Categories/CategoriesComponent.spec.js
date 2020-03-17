import React from 'react'
import { shallow, mount } from 'enzyme'
import CategoriesComponent from './CategoriesComponent'
import styles from './Categories.module.css'

describe('CategoriesComponent', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<CategoriesComponent />)
    expect(wrapper).not.toBeNull()
  })

  it('renders with default props', () => {
    const expectedDefaultProps = {
      id: 1,
      title: 'Default Title',
      description: 'Default Description',
      uri: '/default/uri',
      handleClick: () => {}
    }
    const wrapper = mount(<CategoriesComponent />)
    // JSON.stringify is needed to circumvent this issue regarding referential identity in jest:
    // i.e. () => {}
    // https://github.com/facebook/jest/issues/8475
    expect(JSON.stringify(wrapper.props())).toEqual(JSON.stringify(expectedDefaultProps))
    wrapper.unmount()
  })

  it('renders with custom props', () => {
    const expectedProps = {
      id: 2,
      title: 'Custom Title',
      description: 'Custom Description',
      uri: '/custom/uri',
      handleClick: (myVar) => myVar
    }
    const wrapper = mount(<CategoriesComponent {...expectedProps} />)
    expect(wrapper.props()).toEqual(expectedProps)
    wrapper.unmount()
  })

  it('calls the handleClick callback when clicked', () => {
    const handleClickMock = jest.fn()
    const wrapper = mount(<CategoriesComponent handleClick={handleClickMock} />)
    wrapper.find(`.${styles.category}`).simulate('click')
    expect(handleClickMock).toHaveBeenCalled()
    expect(handleClickMock).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })
})
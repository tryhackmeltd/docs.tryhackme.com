import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from '@docusaurus/router'
import HeaderComponent from './HeaderComponent'

jest.mock('@docusaurus/Link', () => {
  return ({children}) => {
    return children
  }
})
describe('HeaderComponent', () => {
  it('renders succesfully', () => {
    expect(shallow(<HeaderComponent />)).not.toBeNull()
  })

  it('renders with the correct default props', () => {
    const expectedDefaultProps = {
      siteConfig: {},
      btnText: 'Get Started',
      uri: '/'
    }
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><HeaderComponent /></MemoryRouter>)
    expect(wrapper.find('HeaderComponent').props()).toEqual(expectedDefaultProps)
    wrapper.unmount()
  })

  it('renders with the correct passed props', () => {
    const expectedDefaultProps = {
      siteConfig: { foo: 'bar' },
      btnText: 'My new button text',
      uri: '/newUri'
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <HeaderComponent siteConfig={{ foo: 'bar' }} btnText='My new button text' uri='/newUri' />
      </MemoryRouter>)
    expect(wrapper.find('HeaderComponent').props()).toEqual(expectedDefaultProps)
    wrapper.unmount()
  })
})
import React from 'react'
import { shallow, mount } from 'enzyme'
import Home from '../../src/pages/index'
import HeaderComponent from '../../src/components/Header/HeaderComponent'
import homepageCategories from '../../homepage-categories'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

jest.mock('@docusaurus/Link', () => {
  return ({ children }) => {
    return children
  }
})

jest.mock(
  '@docusaurus/useDocusaurusContext',
  () => jest.fn(),
  { virtual: true })

const mockedContext = useDocusaurusContext
mockedContext.mockImplementation(() => ({
  siteConfig: {
    baseUrl: '/',
    url: `http://localhost:${process.env.PORT} || 3000}`
  }
}))

describe('Index (Home) Page', () => {
  it('renders successfully', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).not.toBeNull()
  })

  describe('renders all child components', () => {
    const wrapper = mount(<Home />)
    const layout = wrapper.find('Layout')
    it('renders 1x Layout', () => {
      expect(layout).toHaveLength(1)
    })
    it('renders 1x HeaderComponent', () => {
      expect(layout.find('HeaderComponent')).toHaveLength(1)
    })
    it('renders 1x SplitViewComponent', () => {
      expect(layout.find('SplitViewComponent')).toHaveLength(1)
    })
    it('renders 2x HeroTabComponent', () => {
      expect(layout.find('HeroTabComponent')).toHaveLength(2)
    })
    it('renders 1x BannerComponent', () => {
      expect(layout.find('BannerComponent')).toHaveLength(1)
    })
    const main = layout.find('main')
    it('renders 1x main DOM element', () => {
      expect(main).toHaveLength(1)
    })
    it('renders 1x CategoriesContainer', () => {
      expect(main.find('CategoriesContainer')).toHaveLength(1)
    })
    it(`renders ${homepageCategories.length}x CategoriesComponent`, () => {
      expect(main.find('CategoriesComponent')).toHaveLength(homepageCategories.length)
    })
    wrapper.unmount()
  })
})
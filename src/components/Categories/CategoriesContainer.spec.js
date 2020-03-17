import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter, Router } from '@docusaurus/router'
import styles from './Categories.module.css'
import homepageCategories from '../../../homepage-categories'
import CategoriesContainer from './CategoriesContainer'
import { act } from 'react-dom/test-utils'
import CategoriesComponent from "./CategoriesComponent"
import { createMemoryHistory } from 'history'


describe('CategoriesContainer', () => {
  jest.useFakeTimers()
  beforeEach(() => {
    jest.clearAllTimers()
    jest.clearAllMocks()
  })
  it('renders successfully', () => {
    const wrapper = shallow(<MemoryRouter initialEntries={['/']}><CategoriesContainer homepageCategories={homepageCategories} /></MemoryRouter>)
    expect(wrapper).not.toBeNull()
  })

  it('contains the homepage categories as default props', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><CategoriesContainer homepageCategories={homepageCategories} /></MemoryRouter>)
    expect(wrapper.find('CategoriesContainer').prop('homepageCategories')).toEqual(homepageCategories)
    wrapper.unmount()
  })

  it('should render with 9 CategoryComponent instances', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><CategoriesContainer homepageCategories={homepageCategories} /></MemoryRouter>)
    const categoriesContainer = wrapper.find('CategoriesContainer')
    expect(categoriesContainer.find('CategoriesComponent')).toHaveLength(9)
    wrapper.unmount()
  })

  it('should render 18 categories when the load more button is clicked', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><CategoriesContainer homepageCategories={homepageCategories} /></MemoryRouter>)
    const categoriesContainer = wrapper.find('CategoriesContainer')
    expect(categoriesContainer.find('CategoriesComponent')).toHaveLength(9)
    expect(categoriesContainer.find(`.${styles.categories}`)).toHaveLength(1)
    expect(categoriesContainer.find(`.${styles.postCategoryAction}`)).toHaveLength(1)
    expect(categoriesContainer.find(`.${styles.loadMoreBtn}`)).toHaveLength(1)
    expect(categoriesContainer.find(`.${styles.loadMoreBtnDark}`)).toHaveLength(1)
    act(() => {
      categoriesContainer.find(`.${styles.loadMoreBtn}`).simulate('click')
      jest.runAllTimers()
    })
    wrapper.update()
    expect(wrapper.find('CategoriesContainer').find('CategoriesComponent')).toHaveLength(18)
    wrapper.unmount()
  })

  it('displays total number of categories once all have been loaded', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><CategoriesContainer homepageCategories={homepageCategories} /></MemoryRouter>)
    const categoriesContainer = wrapper.find('CategoriesContainer')
    const loadMoreBtn = categoriesContainer.find(`.${styles.loadMoreBtn}`)
    const divisionCount = Math.floor(homepageCategories.length / 9)
    for (let i = 0; i <= divisionCount + 1; i++) {
      act(() => {
        loadMoreBtn.simulate('click')
        jest.runAllTimers()
      })
    }
    wrapper.update()
    const expectedText = `Total of ${homepageCategories.length} categories loaded.`
    expect(categoriesContainer.find(`.${styles.postCategoryAction}`)).toHaveLength(1)
    expect(categoriesContainer.find(`.${styles.postCategoryAction}`).text()).toEqual(expectedText)
    wrapper.unmount()
  })

  it('displays loading spinner when load more button is clicked', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><CategoriesContainer homepageCategories={homepageCategories} /></MemoryRouter>)
    const categoriesContainer = wrapper.find('CategoriesContainer')
    const loadMoreBtn = categoriesContainer.find(`.${styles.loadMoreBtn}`)
    expect(categoriesContainer.find(`.${styles.postCategoryAction}`).text()).toEqual('Load more...')
    act(() => {
      loadMoreBtn.simulate('click')
      jest.advanceTimersByTime(100)
      wrapper.update()
    })
    expect(categoriesContainer.find(`.${styles.postCategoryAction}`).text()).toEqual('')
    act(() => {
      jest.advanceTimersByTime(1500)
      wrapper.update()
    })
    expect(categoriesContainer.find(`.${styles.postCategoryAction}`).text()).toEqual('Load more...')
    wrapper.unmount()
  })

  it('display no categories text when there are no categories to show', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><CategoriesContainer homepageCategories={[]} /></MemoryRouter>)
    const categoriesContainer = wrapper.find('CategoriesContainer')
    expect(categoriesContainer.find(`.${styles.postCategoryAction}`).text()).toEqual('No categories to load')
    wrapper.unmount()
  })

  describe('renders unique links to each category', () => {
    const history = createMemoryHistory()
    const wrapper = mount(
      <Router history={history} initialEntries={['/']}>
        <CategoriesContainer homepageCategories={homepageCategories} />
      </Router>
    )
    const categoriesContainer = wrapper.find('CategoriesContainer')
    homepageCategories.filter((e,i) => i >= 0 && i <= 8)
      .map((props, idx) => {
        it(`${idx}. navigates to the correct URI: ${props.uri}`, () => {
          const categoryComponent = categoriesContainer.find('CategoriesComponent').at(idx)
          categoryComponent.simulate('click')
          expect(history.location.pathname).toEqual(props.uri)
        })
      })
    wrapper.unmount()
  })
})
import { render } from '@testing-library/react'
import map from 'lodash/map'

import Home from '../../pages/index'
import { linkConfig } from '~/utils/configuration/menu-items'
import { Link } from '~/utils/types/menu-items'

it('should render the Root page', () => {
  const { getByTestId } = render(<Home />)
  const node = getByTestId('home_wrapper')
  expect(node).toBeTruthy()
})

map(linkConfig, ({ title, url }: Link) => {
  it(`should render the link for title ${title}`, () => {
    const { getByTestId } = render(<Home />)
    const node = getByTestId(title)
    expect(node.getAttribute('href')).toBe(`/${url}`)
  })

  it(`should render the proper title for link ${url}`, () => {
    const { getByTestId } = render(<Home />)
    const node = getByTestId(title)
    expect(node.innerHTML).toBe(title)
  })
})

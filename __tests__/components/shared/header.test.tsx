import { render } from '@testing-library/react'

import { Header } from '~/components/shared'

it('should render the Header component', () => {
  const PAGE_TITLE = 'PAGE_TITLE'
  const { getByTestId } = render(<Header pageTitle={PAGE_TITLE} />)
  const node = getByTestId('header_wrapper')
  expect(node).toBeTruthy()
})

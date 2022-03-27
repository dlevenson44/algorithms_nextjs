import { render } from '@testing-library/react'

import { Wrapper } from '~/components/shared'

it('should render the Wrapper component', () => {
  const testId = 'test'
  const { getByTestId } = render(
    <Wrapper page={testId}>
      <p>test</p>
    </Wrapper>
  )
  const node = getByTestId('test_wrapper')
  expect(node).toBeTruthy()
})

import tl from '@testing-library/svelte'
import test from 'tape'

import Box from './box.svelte'

test('[BOX] When mount box with a specific number', (t) => {
  const num = 5
  const { getByTestId } = tl.render(Box, { num })
  const innerNumber = getByTestId('box').innerHTML

  t.equal(innerNumber, `${num}`, 'should render the number')
  tl.cleanup()
  t.end()
})

test('[BOX] When mount box without a specific number', (t) => {
  const { getByTestId } = tl.render(Box, {})
  const innerNumber = getByTestId('box').innerHTML

  t.equal(innerNumber, '0', 'should render 0')
  tl.cleanup()
  t.end()
})

test('[BOX] When mount box with a negative number', (t) => {
  const num = -1
  const { getByTestId } = tl.render(Box, { num })
  const innerNumber = getByTestId('box').innerHTML

  t.equal(innerNumber, '0', 'should render 0')
  tl.cleanup()
  t.end()
})

import tl from '@testing-library/svelte'
import test from 'tape'

import app from './app.svelte'

test('when mount the app with a specific name', (t) => {
  const { getByTestId } = tl.render(app, { name: 'foo' })

  const h1Text = getByTestId('h1').innerHTML

  t.ok(h1Text.includes('foo'), 'should have the name in the title')
  tl.cleanup()
  t.end()
})

import React from 'react'
import HomePage from 'src/pages/index'

test('ホーム画面', () => {
  const home = <HomePage />
  expect(home).toMatchSnapshot()
})

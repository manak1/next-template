---
to: "<%= withTest ? `src/components/${path}/${name}/index.test.tsx` : null %>"
---
import React from 'react'
import <%= name %> from 'src/pages/index'
import { render, cleanup } from '@testing-library/react';

describe("<%= name %>", () => {
  afterEach(()=> {
    cleanup()
  })

  test("render <%= name%> component", () => {
    const { asFragment } = render(<<%= name %> />)
    expect(asFragment()).toMatchSnapshot()
  });

});
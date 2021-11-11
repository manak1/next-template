---
to: "<%= withStory ? `src/components/${path}/${name}/index.stories.tsx` : null %>"
---
import React from "react"
import { Meta, Story } from "@storybook/react"
import <%= name %>, { Props } from "./index"
import { useArgs } from '@storybook/client-api'


export default {
  title: '<%= h.changeCase.pascal(path) %>/<%= name %>',
  component: <%= name %>,
} as Meta<Props>

export const Component: Story<Props> = (args: Props) => {
  const [argsValues] = useArgs()
  return (
    <<%= name %> {...(argsValues as typeof args)}  />
  )
}

Component.args = {}
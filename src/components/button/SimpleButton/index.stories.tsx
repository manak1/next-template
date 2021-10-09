import React from 'react'
import { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import Button from './index'

export default {
  component: Button,
  title: 'Button',
} as Meta

/* const Template: Story<{label:string}> = args => <Button {...args}/> */

export const Component: Story<{ label: string }> = (args: {
  label: string
}) => {
  const [argsValues] = useArgs()
  return (
    <Button {...(argsValues as typeof args)} onClick={() => alert('test')} />
  )
}

Component.args = {
  label: 'テスト',
}

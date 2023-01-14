import React from 'react'
// Use these types instead of: import { Story, Meta } from '@storybook/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Message } from './index'

/* ======================
        default
====================== */

export default {
  title: 'Components/Message',
  component: Message,
  // args: {}
  // argTypes: {},
  parameters: {
    componentSubtitle: 'An amazing Message component!'
    // docs: {
    //   description: {
    //     component: `<div><p>...</p></div>`
    //   }
    // },
  }
} as ComponentMeta<typeof Message>

/* ======================
        Template
====================== */

const Template: ComponentStory<typeof Message> = (args: any) => {
  return <Message {...args} />
}

/* ======================
      DefaultExample
====================== */

export const DefaultExample = Template.bind({})
DefaultExample.args = {}

// DefaultExample.parameters = {
//   docs: { storyDescription: `<p>...</p>` }
// }
// DefaultExample.decorators = [
//   (Story) => (<div style={{ minHeight: 200 }}><Story /></div>)
// ]

import React from 'react'
// Use these types instead of: import { Story, Meta } from '@storybook/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Square } from './index'

/* ======================
        default
====================== */
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Components/Square',
  component: Square,
  // args: {}
  // argTypes: {},
  parameters: {
    componentSubtitle: 'An amazing Square component!'
    // docs: {
    //   description: {
    //     component: `<div><p>...</p></div>`
    //   }
    // },
  }
} as ComponentMeta<typeof Square>

/* ======================
        Template
====================== */

const Template: ComponentStory<typeof Square> = (args: any) => {
  return <Square {...args} />
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
